import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={2}></Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              我過去的 <span className="purple"> 經歷 </span>
            </h1>
            <p className="home-about-body">
              在過去的職涯我擔任軟體工程師的職位
              <br />
              <br />其中我開發了
              <b className="purple"> C#, Angular,SQL,JAVA,Android...等等 </b>
              <br />
              <br />
              在這些時間裡，我接觸到大大小小的專案，也不斷地 <b className="purple">學習</b>學習新技術
              並解決了許多問題
              <br />
              <br />
              我培養了<b className="purple">解決問題</b> 與 <b className="purple">溝通</b>的能力
              <b className="purple"> 而我相信這些能力會陪伴我持續走下去</b>

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>

            </Tilt>
          </Col>
        </Row>
        <Col md={2}></Col>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">

              <li className="social-icons">
                <a
                  href="https://twitter.com/SPP5566"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:hatsunemiku1144@gmail.com"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGmail />
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
