import styled from "styled-components";
import appColors from "../../constants/colors"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap-reverse;
`;

export const ContainerSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: ${appColors.green.toString()};
  width: 100vw;
  height: 100VH;

  @media screen and (min-width: 1200px) {
    width: 50vw;
  }
`;

export const ContainerForm = styled.div`
  position: relative;
  background-color: ${appColors.white.toString()};
  width: 100vw;
  height: 100VH;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  
  @media screen and (min-width: 1200px) {
    width: 50vw;
  }
`;

export const Title = styled.p`
  margin-top:40px;
  font: normal normal normal 30px/38px;
  color: ${appColors.white};
  opacity: 1;
`;

export const Paragraph = styled.p`
  width: 553px;
  height: 60px;
  text-align: center;
  font: normal normal normal 20px/25px;
  letter-spacing: 0;
  color: ${appColors.white};
  opacity: 1;
`;

export const PageDescription = styled.h2`
  right: 83px;
  position: absolute;
  top: 98px;
  font: normal normal 900 35px/48px;
  width: 90%;
  text-align: end;
`;

export const ForTitle = styled.fieldset`
  border: none;
  font: normal normal normal 30px/38px;
  letter-spacing: 0;
  color: ${appColors.grayAccent};
  opacity: 1;
`;

export const FormContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-flow: column;
  width: 434px;
  height: 500px;
`;


export const Footer = styled.div`
  margin:40px 0 15px 0
`;