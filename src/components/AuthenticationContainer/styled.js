import styled from "styled-components";
import appColors from "../../constants/colors"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: ${appColors.green.toString()};
  width: 960px;
  height: 969px;
`;

export const ContainerForm = styled.div`
  background-color: ${appColors.white.toString()};
  width: 960px;
  height: 969px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
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
  color: #707070;
  opacity: 1;
`;

export const FormContent = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: column;
  width: 434px;
  height: 257px;
`;

export const FormAction = styled.div`
  margin: 30px 0 30px 0;
`;

export const Footer = styled.div`
  margin:40px 0 15px 0
`;