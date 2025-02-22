import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/AI_Protrait_5.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Home2.css"; // Import your CSS file with animations

function Home2() {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust threshold as needed (e.g., trigger animation when element is 50% in view)
        if (top < windowHeight * 0.5) {
          ref.current.classList.add("fadeIn"); // Apply your animation class here
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              Passionate AI enthusiast turning data into intelligence{" "}
              <span role="img" aria-label="brain">
                🧠
              </span>{" "}
              <span role="img" aria-label="lightbulb">
                💡
              </span>
              <br />
              <br />
              Fluent in
              <i>
                <b className="purple">
                  Python, TensorFlow, Scikit-learn, Deep Learning, NLP,
                  Langchain, Huggingface, Generative AI (LLM) 🚀{" "}
                </b>
              </i>
              <br />
              <br />
              Crafting innovative AI solutions from emotion recognition to
              generative models{" "}
              <span role="img" aria-label="robot">
                🤖
              </span>{" "}
              <span role="img" aria-label="sparkles">
                ✨
              </span>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt className="tilt-root">
              <div ref={ref} className="animated-element">
                <img src={myImg} className="img-fluid circular-image" alt="avatar" />
              </div>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Parthiban-3997"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Parthi_3997"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/parthiban-ravichandran/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/parthi97"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
