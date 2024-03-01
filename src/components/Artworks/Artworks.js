import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import ArtworkCards from "./ArtworkCards";
import FakeImage from "../../Assets/Artworks/Sketch/FakeImage.png";
import KANNA from "../../Assets/Artworks/ILLUSTATION/KANNA.jpg";
import CHACHAMARU from "../../Assets/Artworks/ILLUSTATION/CHACHAMARU.jpg";
import HOSHINO from "../../Assets/Artworks/ILLUSTATION/HOSHINO.jpg";
import YUI from "../../Assets/Artworks/ILLUSTATION/YUI.png";
import MOKOU from "../../Assets/Artworks/ILLUSTATION/MOKOU.jpg";
import Skectch1 from "../../Assets/Artworks/Sketch/Skectch1.jpg";
import Mai from "../../Assets/Artworks/CharacterDesign/Mai.jpg";
import Pen from "../../Assets/Artworks/CharacterDesign/Pen.jpg";
import KANNA_2 from "../../Assets/Artworks/ILLUSTATION/KANNA_2.jpg";
import tree from "../../Assets/Artworks/CardDesign/tree.jpg";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';



function Artworks() {
  return (
    <Container fluid className="project-section">
      <Container fluid>
        <h1 className="project-heading">
          My  <strong className="purple">ArtWorks </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some artWorks I've done recently.
        </p>


        <Row>

          <Col md={6}><ArtworkCards
            imgSrc={KANNA_2}


          /></Col>


          <Col md={3} className="project-card">
            <ArtworkCards
              imgSrc={YUI}


            />
          </Col>
          <Col md={3} className="project-card">
            <ArtworkCards
              imgSrc={HOSHINO}

            />
          </Col>
          <Col md={3} className="project-card">
            <ArtworkCards
              imgSrc={CHACHAMARU}

            />
          </Col>



          <Col md={3} className="project-card">
            <ArtworkCards
              imgSrc={Mai}


            />
          </Col>

          <Col md={3} className="project-card">
            <ArtworkCards
              imgSrc={MOKOU}


            />
          </Col>
          <Col md={3} className="project-card">
            <ArtworkCards
              imgSrc={Pen}


            />
          </Col>



          <Col md={3} className="project-card"><ArtworkCards
            imgSrc={tree}

          /></Col>



          <Col md={3} className="project-card">
            <ArtworkCards
              imgSrc={Skectch1}

            />
          </Col>

          <Col md={6}><ArtworkCards
            imgSrc={KANNA}

          /></Col>
        </Row>


      </Container>
    </Container>
  );
}

export default Artworks;
