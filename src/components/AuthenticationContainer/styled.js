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
  background-color: ${appColors.green};
  width: 960px;
  height: 969px;
`;

export const ContainerForm = styled.div`
  background-color: ${appColors.white};
  width: 960px;
  height: 969px;
`;

export const Title = styled.h2`
  top: 698px;
  left: 306px;
  width: 348px;
  height: 38px;
  text-align: left;
  font: normal normal normal 30px/38px;
  letter-spacing: 0;
  color: #FFFFFF;
  opacity: 1;
`;

export const Paragraph = styled.p`
  top: 756px;
  left: 202px;
  width: 553px;
  height: 60px;
  text-align: center;
  font: normal normal normal 20px/25px;
  letter-spacing: 0;
  color: #FFFFFF;
  opacity: 1;
`;

export const PageDescription = styled.h2`
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
  justify-content: center;
  flex-flow: column;
`;

export const FormAction = styled.div`
  margin: 30px 0 30px 0;
`;

