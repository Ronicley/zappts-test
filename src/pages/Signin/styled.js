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