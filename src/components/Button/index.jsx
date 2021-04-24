import React from "react";
import * as Styles from "./styled"

const Button = ({text, onClick, bgColor = false, icon}) => {
  return (
    <Styles.Button onClick={onClick} backgroundColor={bgColor}>
      {
        icon&&<img src={icon} alt="icon"/>
      }
      {text}
    </Styles.Button>
  );
};

export default Button;