import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import RecentItem from "../RecentItem/RecentItem";

const RecentItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <section className="container home-items py-5">
      <h2 className="text-center my-4">Most Recent Items</h2>
      <Row xs={1} md={3} className="g-4">
        {items.map((item) => (
          <RecentItem key={item.id} item={item}/>
        ))}
      </Row>
    </section>
  );
};

export default RecentItems;
