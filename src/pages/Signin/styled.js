import styled from "styled-components";
import appColor from "../../constants/colors"

export const CreateAccountLink = styled.a`
  color: ${appColor.green.toString()};
  cursor: pointer;
`;

export const Span = styled.span`
  font: bold 14px/20px;
  color: ${appColor.grayAccent.toString()};
`;

export const ForgotPassword = styled.p`
  width: 100%;
  text-align: right;
  font: normal normal normal 14px/18px;
  color: ${appColor.grayAccent};
  opacity: 1;
`;

export const FormAction = styled.div`
  margin: 30px 0 30px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex-flow: column;
  height: 350px;
`;