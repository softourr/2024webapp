import React from "react";
import "./Module.Button.css";

// children props => <Components>사이에</Components>
function Button({ children, textOnly, ...props }) {
  let cssClass = textOnly ? "active-button" : "disabled-button";
  return (
    <div className={cssClass} {...props}>
      {children}
    </div>
  );
}

export default Button;
