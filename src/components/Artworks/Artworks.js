import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import ArtworkCards from "./ArtworkCards";
import Particle from "../Particle";
import FakeImage from "../../Assets/Artworks/Sketch/FakeImage.png";
import KANNA from "../../Assets/Artworks/ILLUSTATION/KANNA.jpg";
import CHACHAMARU from "../../Assets/Artworks/ILLUSTATION/CHACHAMARU.jpg";
import HOSHINO from "../../Assets/Artworks/ILLUSTATION/HOSHINO.jpg";
import YUI from "../../Assets/Artworks/ILLUSTATION/YUI.png";
import MOKOU from "../../Assets/Artworks/ILLUSTATION/MOKOU.jpg";
import Skectch1 from "../../Assets/Artworks/Sketch/Skectch1.jpg";
import Mai from "../../Assets/Artworks/CharacterDesign/Mai.jpg";
import Pen from "../../Assets/Artworks/CharacterDesign/Pen.jpg";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';



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


        <ListGroup horizontal>

          <ListGroup.Item className="listgroup-artworks-item" action href="">  <Link activeClass="active" className="concept-art" to="concept-art" spy={true} smooth={true} duration={500} >ILLUSTATION</Link></ListGroup.Item>
          <ListGroup.Item className="listgroup-artworks-item" action href="">  <Link activeClass="active" className="concept-art" to="concept-art" spy={true} smooth={true} duration={500} >CharacterDesign</Link></ListGroup.Item>
          <ListGroup.Item className="listgroup-artworks-item" action href="">
            <Link activeClass="active" className="card-design" to="card-design" spy={true} smooth={true} duration={500} >Card-design</Link> </ListGroup.Item>
          <ListGroup.Item className="listgroup-artworks-item" action href="">
            <Link activeClass="active" className="pencel-sketch" to="pencel-sketch" spy={true} smooth={true} duration={500} > Skectch</Link> </ListGroup.Item>
        </ListGroup>


        <Row>
          <Element name="anime-style" className="Element"><h1 className="purple" id="anime-style">插畫作品</h1></Element>
        </Row>
        <Row>
          <Col md={12}><ArtworkCards
            imgSrc={KANNA}
            artworkTitle="Title2"
            desc="desc2"
            artworkLink=""
          /></Col>
          <Col md={6} className="project-card">
            <ArtworkCards
              imgSrc={MOKOU}
              artworkTitle="Title2"
              desc="desc2"
              artworkLink=""
            />
          </Col>
          <Col md={6} className="project-card">
            <ArtworkCards
              imgSrc={YUI}
              artworkTitle="Title2"
              desc="desc2"
              artworkLink=""
            />
          </Col>
          <Col md={6} className="project-card">
            <ArtworkCards
              imgSrc={HOSHINO}
              artworkTitle="Title2"
              desc="desc2"
              artworkLink=""
            />
          </Col>
          <Col md={6} className="project-card">
            <ArtworkCards
              imgSrc={CHACHAMARU}
              artworkTitle="Title2"
              desc="desc2"
              artworkLink=""
            />
          </Col>

        </Row>

        <Row>
          <Element name="card-design" className="Element">    <h1 className="purple">角色設計</h1> </Element>
        </Row>
        <Row>
          <Col md={7} className="project-card">
            <ArtworkCards
              imgSrc={Mai}
              artworkTitle="Title2"
              desc="desc2"
              artworkLink=""
            />
          </Col>
          <Col md={5} className="project-card">
            <ArtworkCards
              imgSrc={Pen}
              artworkTitle="Title2"
              desc="desc2"
              artworkLink=""
            />
          </Col>
        </Row>

        <Row>
          <Element name="concept-art" className="Element">    <h1 className="purple">場景設計</h1></Element>

        </Row>
        <Row>
          <Col md={4}><ArtworkCards
            imgSrc={FakeImage}
            artworkTitle="Title2"
            desc="desc2"
            artworkLink=""
          /></Col>
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
          <Element name="pencel-sketch" className="Element">    <h1 className="purple">鉛筆素描/速寫</h1> </Element>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ArtworkCards
              imgSrc={Skectch1}
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




      </Container>
    </Container>
  );
}

export default Artworks;
