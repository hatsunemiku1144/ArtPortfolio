import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { SiPixiv } from "react-icons/si";

function ArtworkCards(props) {
  return (
    <Card  className="project-card-view">
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.artworkTitle}</Card.Title>
        <Card.Text>
        {props.desc}
        </Card.Text>
        <Button variant="primary" href={props.artworkLink} target="_blank">
          <SiPixiv /> &nbsp;
        </Button>
      </Card.Body>

    </Card>
  );
}

export default ArtworkCards;