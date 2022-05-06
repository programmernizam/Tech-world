import React from "react";
import { Card, Col } from "react-bootstrap";

const Blog = ({blog}) => {
    const {name, img, text} =blog;
  return (
    <Col>
      <Card className="h-100 shadow border-0">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Blog;
