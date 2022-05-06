import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = `https://radiant-journey-01420.herokuapp.com/items`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast("Item successfully added");
      });
  };
  return (
    <div className="w-25 mx-auto">
      <h2 className="text-center fw-bold">Add a new item here!</h2>
      <form className="d-flex flex-column p-5 bg-warning rounded my-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="my-2 p-2 rounded border-0"
          placeholder="Item Name"
          {...register("name")}
        />
        <textarea
          className="my-2 p-2 rounded border-0"
          placeholder="Item Description"
          {...register("description")}
        />
        <input
          className="my-2 p-2 rounded border-0"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="my-2 p-2 rounded border-0"
          placeholder="Image Link"
          type="text"
          {...register("img")}
        />
        <input
          className="my-2 p-2 rounded border-0"
          placeholder="Seller Name"
          type="text"
          {...register("seller")}
        />
        <input
          className="my-2 p-2 rounded border-0"
          placeholder="Quantity"
          type="text"
          {...register("quantity")}
        />
        <input className="btn btn-light" type="submit" value="Add Item" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddItem;
