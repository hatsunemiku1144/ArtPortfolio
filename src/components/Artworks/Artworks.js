import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ArtworkCards from "./ArtworkCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";


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
              imgPath={chatify}
       
              artworktitle="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

 
        </Row>
      </Container>
    </Container>
  );
}

export default Artworks;
