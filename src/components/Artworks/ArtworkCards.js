import React from "react";
import Card from "react-bootstrap/Card";

function ArtworkCards(props) {
  return (
    //TODO:把大圖網址插在上面
    <Card className="project-card-view">

      <Card.Body> <Card.Img variant="top" src={props.imgSrc} /></Card.Body>
      <Card.Footer>
        <Card.Title>{props.artworkTitle}</Card.Title>

      </Card.Footer>


    </Card>
  );
}

export default ArtworkCards;