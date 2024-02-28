import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pei Chun,Hsu </span>
            from <span className="purple"> Taichung, Taiwan.</span>
            <br /> I am currently a software developer at Deanshoes

            <br />
            I am looking forward to become a profresstional Artist.
            <br />
            <br />
            Apart from drawing, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Movie watching
            </li>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The difficulties of not knowing are always much greater than the effort of learning."{" "}
          </p>
          <footer className="blockquote-footer">Andrew Loomis</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
