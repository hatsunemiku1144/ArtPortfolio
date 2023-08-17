import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";

import Type from "./Type";
import {
  useIntl,
  IntlProvider,
  FormattedMessage,
  FormattedDate,
  FormattedTime,
  FormattedRelativeTime,
  FormattedNumber,
  FormattedList,
} from "react-intl";
import { useState } from "react";



let language = "en";
switch (navigator.language) {
  case "ja":
    language = "ja";
    break;
  case "zh":
    language = "zh";
    break;
  default:
    language = "en";
    break;
}



function loadMessages(locale) {
  switch (locale) {
    case "ja":
      return import("../../language/ja.json");
    case "en":
      return import("../../language/en.json");
    case "zh":
      return import("../../language/zh.json");
    default:
      return import("../../language/en.json");
  }
}

function Home() {
  const intl = useIntl();
  return (

    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={2}><div className="circle"></div></Col>
            <Col md={7}>
              <Row>
                <Col>  <h1 className="heading">TEST</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                我是
                <strong className="main-name"> 徐沛駿</strong>
                是一名插畫家
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
