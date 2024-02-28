import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaXTwitter } from "react-icons/fa6";
import { SiPixiv } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
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


          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
