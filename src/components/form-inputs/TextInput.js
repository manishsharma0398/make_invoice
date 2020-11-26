import React from "react";
import "./FormInput.scss";

const TextInput = ({ type, label, id, placeholder, required }) => {
  return (
    <div className="text-input">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} required />
    </div>
  );
};

TextInput.defaultProps = {
  type: "text",
};

export default TextInput;
