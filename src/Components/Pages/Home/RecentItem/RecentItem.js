import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RecentItem = ({ item }) => {
  const navigate = useNavigate();
  const { _id, name, description, price, img, seller, quantity } = item;
  const navigateToItemDetail = (id) => {
    navigate(`/item/${id}`);
  };
  return (
    <Col>
      <Card className="h-100 shadow border-0">
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text className="pe-4">
            <span className="d-flex justify-content-between">
              <span className="shadow-sm p-2 border rounded">
                Price: ${price}
              </span>
              <span className="shadow-sm p-2 border rounded">
                In Stock: {quantity}
              </span>
              <span className="shadow-sm p-2 border rounded">
                Seller: {seller}
              </span>
            </span>
          </Card.Text>
          <Card.Text title={description}>{description.slice(0, 160)}</Card.Text>
          <div className="d-flex justify-content-around">
            <button
              onClick={() => navigateToItemDetail(_id)}
              className="btn btn-primary rounded-pill px-5"
            >
              Update
            </button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RecentItem;
