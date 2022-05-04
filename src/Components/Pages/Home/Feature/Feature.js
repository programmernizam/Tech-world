import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Feature = ({ feature }) => {
  const { title, img, text } = feature;
  return (
    <Col>
      <Card>
        <Card.Img src={img} alt="Card image" />
        <Card.ImgOverlay className="d-flex justify-content-start align-items-center">
          <div>
            <Card.Text className="m-0 fs-4">{text}</Card.Text>
            <Card.Title className="display-6 fw-bold text-dark">{title}</Card.Title>
            <Button variant="danger" className="rounded-0"><Link className="text-decoration-none text-white" to={'/login'}>SHOP NOW</Link></Button>
          </div>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
};

export default Feature;
