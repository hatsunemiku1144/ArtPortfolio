import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { SiPixiv } from "react-icons/si"

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by SPP,Origin Source by Soumyajit Behera</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SPP</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">

            <li className="social-icons">
              <a
                href="https://www.pixiv.net/en/users/6078612"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiPixiv />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://twitter.com/SPP5566"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>



          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
