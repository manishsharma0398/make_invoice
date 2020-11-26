import React from "react";

import "./CustomButton.scss";

const CustomButton = ({ buttonText, type, className }) => {
  return (
    <button className={`${className}` + " custom-button"} type={type}>
      {buttonText}
    </button>
  );
};

CustomButton.defaultProps = {
  type: "button",
};

export default CustomButton;
