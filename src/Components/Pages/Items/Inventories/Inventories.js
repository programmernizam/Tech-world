import React from "react";
import { Row } from "react-bootstrap";
import useItem from "../../../Hooks/useItem/useItem";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [items] = useItem();
  return (
    <section className="container home-items py-5">
      <h2 className="text-center my-4">All of Items</h2>
      <Row xs={1} md={3} className="g-4">
        {items.map((item) => (
          <Inventory key={item._id} item={item} />
        ))}
      </Row>
    </section>
  );
};

export default Inventories;
