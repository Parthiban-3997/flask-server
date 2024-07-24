import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopGif from "../../Assets/about2.gif"; // Assuming you have converted about.png to about2.gif
import anotherGif from "../../Assets/about1.gif"; // Path to another GIF
import another1Gif from "../../Assets/about3.gif"; // Path to another GIF
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle /> {/* Particle component for background effect */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{
              paddingTop: "0px",
              paddingBottom: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "100px", // Adjust the marginTop value to move down about2.gif
            }}
            className="about-img"
          >
            {/* Second GIF */}
            <img src={anotherGif} alt="another gif" className="img-fluid" style={{ height: "auto", width: "auto", marginBottom: "80px" }} />
            {/* First GIF */}
            <img src={laptopGif} alt="about" className="img-fluid" style={{ height: "auto", width: "auto", marginBottom: "80px" }} />
            {/* First GIF */}
            <img src={another1Gif} alt="about" className="img-fluid" style={{ height: "auto", width: "auto" }} />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
