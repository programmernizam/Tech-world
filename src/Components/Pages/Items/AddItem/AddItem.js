import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const onSubmit = (data, event) => {
    event.preventDefault();
    const url = `https://quiet-sands-26329.herokuapp.com/items`;
    fetch((url), {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
          toast("Item successfully added");
          event.target.reset()
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center fw-bold">Add a new item here!</h2>
      <form
        className="d-flex flex-column p-5 bg-warning rounded my-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="my-2 p-2 rounded border-0"
          placeholder="Item Name"
          {...register("name")}
          required
        />
        <input
          className="my-2 p-2 rounded border-0"
          placeholder="User email"
          {...register("email")}
          value={user?.email}
          required
        />
        <textarea
          className="my-2 p-2 rounded border-0"
          placeholder="Item Description"
          {...register("description")}
          required
        />
        <input
          className="my-2 p-2 rounded border-0"
          placeholder="Price"
          type="number"
          {...register("price")}
          required
        />
        <input
          className="my-2 p-2 rounded border-0"
          placeholder="Image Link"
          type="text"
          {...register("img")}
          required
        />
        <input
          className="my-2 p-2 rounded border-0"
          placeholder="Seller Name"
          type="text"
          {...register("seller")}
          required
        />
        <input
          className="my-2 p-2 rounded border-0"
          placeholder="Quantity"
          type="text"
          {...register("quantity")}
          required
        />
        <input className="btn btn-light" type="submit" value="Add Item" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddItem;
