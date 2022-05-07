import React from "react";
import { Link } from "react-router-dom";

const ManageItem = ({ item, handelDelete }) => {
  const { _id, img, name, price, seller, quantity } = item;
  return (
    <tr>
      <td className="text-center">
        <img style={{ width: "60px" }} className="" src={img} alt="" />
      </td>
      <td>{name}</td>
      <td>${price}</td>
      <td>{seller}</td>
      <td>{quantity}</td>
      <td>
        <div className="d-flex justify-content-evenly align-items-center">
          <button className="btn btn-success rounded-pill px-5">
            <Link className="text-decoration-none text-light" to={"/additem"}>
              Add Item
            </Link>
          </button>
          <button onClick={() => handelDelete(_id)} className="btn btn-danger rounded-pill px-5">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ManageItem;
