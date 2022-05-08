import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import Item from "../Item/Item";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const email = user?.email;
    const url = `http://localhost:4200/items?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);
  return (
    <section className="container home-items py-5 text-center">
      <h2 className=" my-4">My Items</h2>
      <Row xs={1} md={3} className="g-4">
        {items
          .map((item) => <Item key={item._id} item={item} />)
          .slice(0, 6)}
      </Row>
    </section>
  );
};

export default MyItem;
