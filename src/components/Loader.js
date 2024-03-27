import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const loaderStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

const Loader = () => (
  <div style={loaderStyle}>
    <InfinitySpin color="grey" />
  </div>
);

export default Loader;
