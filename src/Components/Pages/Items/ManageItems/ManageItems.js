import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useItem from "../../../Hooks/useItem/useItem";
import ManageItem from "../ManageItem/ManageItem";

const ManageItems = () => {
  const [items, setItems] = useItem();
  const handelDelete = (id) => {
    const proceed = window.confirm("Are You sure?");
    if (proceed) {
      const url = `https://quiet-sands-26329.herokuapp.com/items/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Item successfully deleted");
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
          window.location.reload()
        });
      setItems([]);
    }
  };
  return (
    <div>
      <h2 className="text-center my-4">Manage your Items here</h2>
      <div className="text-center my-3">
        <button className="btn btn-success rounded-pill px-5">
          <Link className="text-decoration-none text-light" to={"/additem"}>
            Add Item
          </Link>
        </button>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr className="text-center">
            <th>Item Image</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Seller Name</th>
            <th>Quantity</th>
            <th>Add/Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ManageItem
              key={item._id}
              item={item}
              handelDelete={handelDelete}
            ></ManageItem>
          ))}
        </tbody>
      </Table>
      <ToastContainer />
    </div>
  );
};

export default ManageItems;
