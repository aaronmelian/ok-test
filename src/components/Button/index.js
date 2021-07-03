import React, { Children } from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ clicked, children }) => (
  <button className="Button" onClick={clicked}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  clicked: PropTypes.func,
};

export default Button;
