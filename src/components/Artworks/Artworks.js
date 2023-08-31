import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import ArtworkCards from "./ArtworkCards";
import Particle from "../Particle";
import FakeImage from "../../Assets/Artworks/Sketch/FakeImage.png";
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

          <ListGroup.Item className="listgroup-artworks-item" > <Link activeClass="active" className="anime-style" to="anime-style" spy={true} smooth={true} duration={500} >日系插畫設計</Link>    </ListGroup.Item>
          <ListGroup.Item className="listgroup-artworks-item" action href="">  <Link activeClass="active" className="concept-art" to="concept-art" spy={true} smooth={true} duration={500} >場景設計</Link></ListGroup.Item>
          <ListGroup.Item className="listgroup-artworks-item" action href="">
            <Link activeClass="active" className="card-design" to="card-design" spy={true} smooth={true} duration={500} >卡片設計</Link> </ListGroup.Item>
          <ListGroup.Item className="listgroup-artworks-item" action href="">
            <Link activeClass="active" className="pencel-sketch" to="pencel-sketch" spy={true} smooth={true} duration={500} > 鉛筆素描</Link> </ListGroup.Item>
          <ListGroup.Item className="listgroup-artworks-item" action href="">
            <Link activeClass="active" className="digital-sketch" to="digital-sketch" spy={true} smooth={true} duration={500} >   電繪素描</Link> </ListGroup.Item>
        </ListGroup>


        <Row>
          <Element name="anime-style" className="Element"><h1 className="purple" id="anime-style">日系插畫設計</h1></Element>
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
          <Element name="card-design" className="Element">    <h1 className="purple">卡片設計</h1> </Element>
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
          <Element name="pencel-sketch" className="Element">    <h1 className="purple">鉛筆素描</h1> </Element>
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
          <Element name="digital-sketch" className="Element">       <h1 className="purple">電繪素描</h1> </Element>
        </Row>
        <Row>
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



      </Container>
    </Container>
  );
}

export default Artworks;
