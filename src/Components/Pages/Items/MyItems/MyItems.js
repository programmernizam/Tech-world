import React from "react";
import { Row } from "react-bootstrap";
import useItem from "../../../Hooks/useItem/useItem";
import MyItem from "../MyItem/MyItem";

const MyItems = () => {
  const [items] = useItem();
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
