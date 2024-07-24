import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiAws } from "react-icons/di";
import {
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiScikitlearn,
  SiMicrosoftazure,
  SiStreamlit,
  SiGithubactions,
  SiMongodb,
  SiMysql,
  SiMicrosoftexcel,
  SiPowerbi,
} from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import "./Techstack.css"; // Import your CSS file for styling

function Techstack() {
  const techIcons = [
    { icon: <DiPython />, name: "Python" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiPytorch />, name: "PyTorch" },
    { icon: <SiScikitlearn />, name: "Scikit-Learn" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiOpencv />, name: "OpenCV" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiMicrosoftazure />, name: "Azure Functions" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiStreamlit />, name: "Streamlit" },
    { icon: <SiGithubactions />, name: "Github Actions" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiMicrosoftexcel />, name: "Excel" },
    { icon: <SiPowerbi />, name: "Power BI" },
    // Add additional icons here
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons glitter">
          {tech.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
