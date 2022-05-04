import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import MyItem from "../MyItem/MyItem";

const MyItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <section className="container home-items py-5">
      <h2 className="text-center my-4">All of My Items</h2>
      <Row xs={1} md={3} className="g-4">
        {items.map((item) => (
          <MyItem key={item._id} item={item} />
        ))}
      </Row>
    </section>
  );
};

export default MyItems;
