import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiPycharm,
  SiAnaconda,
} from "react-icons/si";
import "./Toolstack.css"; // Import your CSS file for styling

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tool-icons rotate">
        <SiAnaconda />
      </Col>
      <Col xs={4} md={2} className="tool-icons pulse">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tool-icons shake">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tool-icons bounce">
        <SiPycharm />
      </Col>
    </Row>
  );
}

export default Toolstack;
