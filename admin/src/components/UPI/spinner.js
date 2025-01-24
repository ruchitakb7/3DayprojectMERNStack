import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Spinner animation="border" variant="primary" />
      <p>Loading, please wait...</p>
    </div>
  );
};

export default Loading;
