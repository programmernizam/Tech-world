import React from "react";

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
          <button onClick={() => handelDelete(_id)} className="btn btn-danger rounded-pill px-4">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ManageItem;
