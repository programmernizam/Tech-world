import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useItem from "../../../Hooks/useItem/useItem";
import RecentItem from "../RecentItem/RecentItem";

const RecentItems = () => {
  const [items] = useItem();
  return (
    <section className="container home-items py-5 text-center">
      <h2 className=" my-4">Most Recent Items</h2>
      <Row xs={1} md={3} className="g-4">
        {items
          .map((item) => <RecentItem key={item._id} item={item} />)
          .slice(0, 6)}
      </Row>
      <button className="btn btn-danger rounded-pill px-5 my-4">
        <Link className="text-decoration-none text-light" to={"/manageitems"}>
          Manage Items
        </Link>
      </button>
    </section>
  );
};

export default RecentItems;
