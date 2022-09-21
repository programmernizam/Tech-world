import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useItemDetails from "../../../Hooks/useItemDetails/useItemDetails";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [item] = useItemDetails(itemId);
  const handleDelivered = () => {
    if (item.quantity > 0) {
      const updateQuantity = item?.quantity - 1;
      // send update data to the server
      const url = `https://tech-word-server.onrender.com/items/${itemId}`;
      console.log(url);
      fetch(url, {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ updateQuantity }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (item.quantity > 0) {
            toast("Item successfully delivered");
            window.location.reload();
          }
        });
    } else {
      toast("Item have out of stock");
    }
  };

  const handleStock = (e) => {
    e.preventDefault();
    const number = e.target.quantity.value;
    if (number > 0) {
      const updateQuantity = item?.quantity + parseInt(number);
      // send update data to the server
      fetch(`https://tech-word-server.onrender.com/items/${itemId}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ updateQuantity }),
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Successfully added stocks");
          e.target.reset();
          window.location.reload()
        });
    } else {
      toast.error("put a valid integer number", {
        id: "putValid",
        duration: 5000,
      });
    }
  };
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
              <Card.Text className="text-primary">
                Brand: {item.seller}
              </Card.Text>
              <Card.Text className="text-primary">
                In Stock:{" "}
                <span>
                  {item.quantity === 0 ? (
                    <span className="text-danger">Out of stock</span>
                  ) : (
                    <span>{item?.quantity}</span>
                  )}
                </span>
              </Card.Text>
              <Button
                onClick={handleDelivered}
                variant="danger"
                className="w-50 rounded-pill"
              >
                Delivered
              </Button>
              <form onSubmit={handleStock} className="my-3">
                <input
                  type="text"
                  placeholder="Add Stock"
                  name="quantity"
                  className="border-danger p-2 rounded-0"
                />
                <input
                  className="p-2 btn btn-danger rounded-0 border-danger"
                  type="submit"
                  value="ADD STOCK"
                />
              </form>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ItemDetails;
