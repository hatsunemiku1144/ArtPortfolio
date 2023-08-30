import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import ArtworkCards from "./ArtworkCards";
import Particle from "../Particle";
import FakeImage from "../../Assets/Artworks/Sketch/FakeImage.png";
import Scroll from 'react-scroll'

const ScrollLink = Scroll.ScrollLink

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
          <ListGroup.Item className="listgroup-artworks-item" action href="">      <ScrollLink 
        to="anime-style" 
        spy={true} 
        smooth={true} 
        duration={500} 
     
      >
        日系插畫設計
      </ScrollLink>       </ListGroup.Item>
          <ListGroup.Item className="listgroup-artworks-item" action href=""><span><strong  className="nav-link">場景設計</strong></span></ListGroup.Item>
          <ListGroup.Item className="listgroup-artworks-item" action href="">
            <span><strong  className="nav-link">卡片設計</strong></span></ListGroup.Item>
          <ListGroup.Item className="listgroup-artworks-item" action href="">
            <span><strong  className="nav-link">鉛筆素描</strong></span></ListGroup.Item>
          <ListGroup.Item className="listgroup-artworks-item" action href="">
            <span><strong  className="nav-link">電繪素描</strong></span></ListGroup.Item>
        </ListGroup>


        <Row>
          <h1 className="purple" id = "anime-style">日系插畫設計</h1>
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
          <h1 className="purple">卡片設計</h1>
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
          <h1 className="purple">場景設計</h1>
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
          <h1 className="purple">電繪素描</h1>
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
