import React from "react";
import { Card, Col } from "react-bootstrap";

const RecentItem = ({ item }) => {
  const { name, description, price, img, seller, quantity } = item;
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="pe-4">
            <div className="d-flex justify-content-between">
              <span className="shadow-sm p-2 border rounded">Price: ${price}</span> 
              <span className="shadow-sm p-2 border rounded">In Stock: {quantity}</span>
              <span className="shadow-sm p-2 border rounded">Seller: {seller}</span>
            </div>
          </Card.Text>
          <Card.Text>{description}</Card.Text>
          <button className="btn btn-warning rounded-pill px-5">Update</button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RecentItem;
