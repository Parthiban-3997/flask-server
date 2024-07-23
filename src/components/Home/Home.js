import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Chatbot from "./Chatbot"; // Import the new Chatbot component

function Home() {
  const [chatbotVisible, setChatbotVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChatbotVisible(true);
    }, 5000); // 5 seconds delay

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> PARTHIBAN RAVICHANDRAN</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Container className="query-form-section">
        <Chatbot visible={chatbotVisible} /> {/* Add the Chatbot component */}
      </Container>
    </section>
  );
}

export default Home;
