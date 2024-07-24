import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Parthiban Ravichandran </span>
            from <span className="purple"> Preston, United Kingdom.</span>
            <br />
            <br />
            <br />
            A passionate and results-driven Data Scientist with over 3+ years of experience in the tech industry. I hold a Master’s degree in Applied Data Science from the University of Central Lancashire, where I specialized in AI, Machine Learning, NLP, and Computer Vision. My work focuses on leveraging the power of Generative AI to solve complex problems and drive technological innovation.
            <br />
            <br />
            <br />
            Throughout my career, I've successfully designed and implemented advanced AI solutions, bridging the gap between business needs and technical capabilities. My experience spans across various domains including data analysis, cloud computing, and MLOps, allowing me to build robust and scalable AI systems.
            <br />
            <br />
            <br />
            I thrive on transforming complex data into actionable insights and am particularly fascinated by the potential of generative AI. Whether it's developing sophisticated models for multimodal emotion recognition or creating smart, AI-powered applications, I am committed to driving excellence and innovation in every project I undertake.
            <br />
            <br />
            <br />
            When I'm not immersed in data science projects, you can find me exploring the latest advancements in AI, contributing to open-source projects, or sharing my knowledge with the community through publications and presentations.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> Playing PC Games:</span> A great way to relax and keep my strategic thinking sharp.
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> Getting Updated with Recent Technologies:</span> I love staying ahead of the curve by constantly learning about new tech advancements
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> Travel Exploring: </span> Discovering new places and cultures fuels my creativity and broadens my perspective
            </li>
            <br />
            <br />
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Craft innovation that transforms lives and shapes the future.!"{" "}
          </p>
          <footer className="blockquote-footer">Parthiban</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
