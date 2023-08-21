import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ArtworkCards from "./ArtworkCards";
import Particle from "../Particle";
import FakeImage from "../../Assets/Artworks/Sketch/FakeImage.png";


function Artworks() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">ArtWorks </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few artWorks I've worked on recently.
        </p>
        <Row>   
          <h1 className="purple">鉛筆素描</h1>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ArtworkCards
              imgSrc={FakeImage}
              artworkTitle="Title1"
              desc="desc1"
              artworkLink="https://www.google.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ArtworkCards
              imgSrc={FakeImage}
              artworkTitle="Title2"
              desc="desc2"
              artworkLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ArtworkCards
              imgSrc={FakeImage}
              artworkTitle="Title2"
              desc="desc2"
              artworkLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ArtworkCards
              imgSrc={FakeImage}
              artworkTitle="Title2"
              desc="desc2"
              artworkLink=""
            />
          </Col>
        </Row>
        <Row>
          <span>Testing</span>
        </Row>
        <Row>
          <Col md={4}><ArtworkCards
                      imgSrc={FakeImage}
                      artworkTitle="Title2"
                      desc="desc2"
                      artworkLink=""
          /></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Artworks;
