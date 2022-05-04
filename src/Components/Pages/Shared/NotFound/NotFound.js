import React from "react";

const NotFound = () => {
  return (
    <div
      className="text-center d-flex justify-content-center align-items-center"
      style={{ height: "60vh" }}
    >
      <div>
        <h2 className="text-danger display-4 fw-bold">!404</h2>
        <h2 className="display-4 fw-bold">Not Found</h2>
      </div>
    </div>
  );
};

export default NotFound;
