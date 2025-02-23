import json

def format_github_data(data):
    formatted_data = {}
    
    for repo_name, repo_data in data.items():
        # Just keep the repo name and description
        formatted_data[repo_name] = {
            "description": repo_data.get("description", None)
        }
    
    return formatted_data

try:
    # Read the JSON file
    with open('github_data.json', 'r', encoding='utf-8') as f:
        github_data = json.load(f)
    
    # Format the data to only include description
    formatted_data = format_github_data(github_data)

    # Write the formatted data back
    with open('github_data.json', 'w', encoding='utf-8') as f:
        json.dump(formatted_data, f, indent=4, ensure_ascii=False)
        
    print("Successfully formatted the data!")
    
except Exception as e:
    print(f"Error: {str(e)}") 