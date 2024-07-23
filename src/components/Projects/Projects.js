import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import research from "../../Assets/Projects/research.png";
import interview from "../../Assets/Projects/interview.png";
import pdfqa from "../../Assets/Projects/pdfqa.png";
import news from "../../Assets/Projects/news.png";
import sql from "../../Assets/Projects/sql.png";
import smartats from "../../Assets/Projects/smartats.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interview}
              isBlog={false}
              title="Multimodal Emotion Recognition"
              description="Developed an advanced AI system integrating facial and voice recognition to enhance candidate assessment accuracy in real-time. Implemented custom deep learning models and leveraged MediaPipe for robust facial tracking, optimizing efficiency and deployment with Docker containers and CI/CD pipeline on Azure."
              ghLink="https://github.com/Parthiban-R-3997/Multimodal-Emotion-Recognition-using-Speech-Cues-and-Facial-Expressions"
              demoLink="https://multimodal-emotion-detection.azurewebsites.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartats}
              isBlog={false}
              title="Smart ATS"
              description="Created a streamlined Smart ATS web application using Streamlit and Google's Gemini Pro AI model to improve the hiring process. Enhanced resume fine-tuning against job descriptions and evaluation accuracy, significantly boosting candidate confidence and success rates."
              ghLink="https://github.com/Parthiban-R-3997/Smart-ATS-System-Using-Google-Gemini"
              demoLink="https://huggingface.co/spaces/Parthiban97/ATS_Smart_System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pdfqa}
              isBlog={false}
              title="Advanced Document Q&A System"
              description="Built a Streamlit web app using Groq's LPU inference engine to speed up document question-answering. Integrated RAG approach and FAISS vector DB for scalable and reliable responses, optimizing deployment management and operational efficiency."
              ghLink="https://github.com/Parthiban-R-3997/Chat_Groq_Document_Q_A"
              demoLink="https://huggingface.co/spaces/Parthiban97/Chat_Groq_Document_Q_A"              
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={research}
              isBlog={false}
              title="AI Research Assistant"
              description="Developed a specialized web app for research assistance, reducing search time by 90% and offering custom URL support. Integrated AI agents for adaptive responses and improved search efficiency, enhancing user experience and insights."
              ghLink="https://github.com/Parthiban-R-3997/Chat_With_Multiple_Data_Sources"
              demoLink="https://huggingface.co/spaces/Parthiban97/Chat_With_Multiple_Data_Sources"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sql}
              isBlog={false}
              title="SQL Chat Assistant"
              description="Created a web app enabling natural language SQL queries across multiple databases, significantly reducing data retrieval time. Integrated GPT and Groq models for accurate and prompt responses, supporting business professionals in obtaining efficient and precise results."
              ghLink="https://github.com/Parthiban-R-3997/Chat_With_Multiple_SQL_Databases"
              demoLink="https://chatwithmultiplesqldatabases.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="Real-Time Newsletter Generation"
              description="Leveraging advanced AI technology to automate the creation of customized newsletters in real-time. Using the CrewAI framework, it orchestrates a team of AI agents to research, curate, and design newsletters based on user-specified topics. Ideal for businesses and individuals seeking efficient, professional-grade newsletter solutions without extensive manual effort."
              ghLink="https://github.com/Parthiban-R-3997/Real_Time_Based_News_Letter_Generation_Using_CrewAI"
              demoLink="https://realtimebasednewslettergeneration.streamlit.app/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
