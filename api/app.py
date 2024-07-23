import sys
import json
import os
import re
from langchain_core.prompts import PromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.runnables import RunnableSequence
from langchain.memory import ConversationBufferMemory
from dotenv import load_dotenv

load_dotenv()

summary_template = """
You are Parthiban (Parthi), an AI/ML engineer. Answer all queries in the first person, as if you are Parthi himself.
Use "I", "me", "my" when referring to Parthiban or his work. Be confident and direct in your responses.

**Guidelines for Response Formatting:**

1. **Be Concise and Clear:** Provide information in a straightforward manner. Avoid unnecessary verbosity.
2. **Use Structured Formatting:** If the context or response is long, structure the information using bullet points, numbered lists, or sections to make it more readable.
3. **Highlight Key Information:** Use bold or italics to emphasize important details. For example, project names, degrees, or notable achievements.
4. **Include Links Appropriately:** If there are URLs or references, include them in a clickable format.

**Examples:**

**Human:** How many repositories does Parthi have?
**Assistant:** I currently have {num_repos} public repositories on my GitHub. These cover a range of projects in AI, ML, and data science.

**Human:** What kind of projects has Parthi worked on?
**Assistant:** I've worked on various projects in AI and ML. Some of my notable projects include:
* **Multimodal Emotion Recognition using Facial Expressions and Voice Cues:** This project focused on building an emotion recognition system that analyzes both facial expressions and voice cues during behavioral interviews.
* **Sensible Autonomous Machine using deep learning and convolutional neural networks:** This project involved developing a self-driving machine that can navigate obstacles, follow objects, and reach destinations by utilizing deep learning techniques.
* **Potato-Disease-Prediction:** This project used deep learning techniques to predict common potato leaf diseases such as early blight, late blight, and healthy leaves.

**Human:** What are your grades in your education?
**Assistant:** Here are the details of my educational qualifications:
* **Master's Degree in Data Science** from the University of Central Lancashire: Merit
* **Bachelor of Engineering in Computer Science and Engineering** from Rajalakshmi Engineering College: First Class

{information}
LinkedIn Information:
{linkedin_information}

**Human:** {query}
**Assistant:**
"""

summary_prompt_template = PromptTemplate(
    input_variables=["information", "query", "num_repos", "projects", "linkedin_information"],
    template=summary_template
)

llm = ChatGoogleGenerativeAI(model="gemini-1.5-flash")
chain = RunnableSequence(steps=[summary_prompt_template, llm])

memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)

def prepare_repo_information(repo_details):
    num_repos = len(repo_details)
    projects = ', '.join(repo_details.keys())
    readme_contents = '\n\n'.join([f"Repo Name: {name}\nDescription: {details['description']}\nREADME:\n{details['readme']}" for name, details in repo_details.items()])
    return {
        'num_repos': num_repos,
        'projects': projects,
        'information': readme_contents
    }

def format_response(response_text):
    # Basic Markdown to HTML conversion
    formatted_text = response_text
    
    # Convert bullet points into unordered list
    formatted_text = formatted_text.replace('* ', '<li>').replace('\n', '</li>\n')
    formatted_text = f'<ul>\n{formatted_text}</ul>'

    # Convert line breaks
    formatted_text = formatted_text.replace('<li>', '<li>\n')

    # Convert links in Markdown to HTML
    formatted_text = re.sub(r'\[(.*?)\]\((.*?)\)', r'<a href="\2">\1</a>', formatted_text)

    return formatted_text

def main(query):
    try:
        with open("github_data.json", "r") as file:
            repo_details = json.load(file)

        repo_info = prepare_repo_information(repo_details)

        linkedin_profile_url = "https://www.linkedin.com/in/parthiban-ravichandran/"
        with open("linkedin_data.json", "r") as file:
            linkedin_data = json.load(file)

        linkedin_information = "\n".join([f"{key}: {value}" for key, value in linkedin_data.items()])

        response = chain.invoke({
            "information": repo_info['information'],
            "query": query,
            "num_repos": repo_info['num_repos'],
            "projects": repo_info['projects'],
            "linkedin_information": linkedin_information
        })

        memory.save_context({"input": query}, {"output": response["text"]})

        return format_response(response["text"])  # Return formatted response

    except Exception as e:
        print(f"Error: {e}")
        return "An error occurred while processing your request."

if __name__ == "__main__":
    if len(sys.argv) > 1:
        query = sys.argv[1]
        print(main(query))
    else:
        print("No query provided.")
