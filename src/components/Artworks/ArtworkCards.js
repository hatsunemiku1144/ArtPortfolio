import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { SiPixiv } from "react-icons/si";

function ArtworkCards(props) {
  return (

    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.artworkTitle}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <a
                href= {props.artworkLink}
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiPixiv />
              </a> &nbsp;
      </Card.Body>

    </Card>
  );
}

export default ArtworkCards;