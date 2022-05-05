import React from "react";
import { Row } from "react-bootstrap";
import useItem from "../../../Hooks/useItem/useItem";
import RecentItem from "../RecentItem/RecentItem";

const RecentItems = () => {
  const [items] = useItem();
  return (
    <section className="container home-items py-5">
      <h2 className="text-center my-4">Most Recent Items</h2>
      <Row xs={1} md={3} className="g-4">
        {items.map((item) => (
          <RecentItem key={item._id} item={item}/>
        )).slice(0, 6)}
      </Row>
    </section>
  );
};

export default RecentItems;
