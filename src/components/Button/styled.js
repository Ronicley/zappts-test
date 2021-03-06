import styled from "styled-components";
import appColor from "../../constants/colors"

export const Button = styled.button`
  ${
      props => !props.backgroundColor ? 
      `background: ${appColor.grayAccent.toString()} 0% 0%;
       width: 175px;
       color: ${appColor.white.toString()};
       `
       :
      `width: 263px;
      background: ${appColor.white.toString()} 0% 0%;
      color: ${appColor.grayAccent.toString()};
      box-shadow: 0px 3px 6px #00000029;
      `
  }

  height: 45px;
  border-radius: 100px;
  border: none;
  font: normal normal bold 16px/20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;