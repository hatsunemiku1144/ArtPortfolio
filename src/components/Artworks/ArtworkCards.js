import React from "react";
import Card from "react-bootstrap/Card";

function ArtworkCards(props) {
  return (
    //TODO:把大圖網址插在上面


    <Card onClick={() => { window.open(props.imgSrc, "_blank") }} className="project-card-view" >

      <Card.Body> <Card.Img variant="top" src={props.imgSrc} />
        <Card.Title style={{ textAlign: "center" }}>{props.artworkTitle}</Card.Title>
      </Card.Body>
      <Card.Footer>

        <Card.Text>
          {props.desc}
        </Card.Text>
      </Card.Footer>


    </Card >
  );
}

export default ArtworkCards;