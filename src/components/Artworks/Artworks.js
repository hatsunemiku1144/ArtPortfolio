import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ArtworkCards from "./ArtworkCards";
import Particle from "../Particle";



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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ArtworkCards
                imgSrc = ""
                artworkTitle = "Title1"
                desc = "desc1"
                artworkLink = ""
            />
          </Col>
          <Col md={4} className="project-card">
            <ArtworkCards
                imgSrc = ""
                artworkTitle = "Title2"
                desc = "desc2"
                artworkLink = ""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Artworks;
