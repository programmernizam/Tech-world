import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useItemDetails from "../../../Hooks/useItemDetails/useItemDetails";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [item] = useItemDetails(itemId);
  
  return (
    <div className="container my-3">
      <Card style={{ background: "#F0EDEB" }}>
        <Row md={2}>
          <Col>
            <Card.Img src={item.img} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Title className="text-danger">${item.price}</Card.Title>
              <hr />
              <Card.Text style={{ color: "#727f8f" }}>
                {item.description}
              </Card.Text>
              <Card.Text className="text-primary">Brand: {item.seller}</Card.Text>
              <Card.Text className="text-primary">In Stock: {item.quantity}</Card.Text>
              <Button onClick={()=>(item.quantity -1 )} variant="danger" className="w-50 rounded-pill">Deliver</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ItemDetails;
