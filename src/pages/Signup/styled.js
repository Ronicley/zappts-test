import styled from "styled-components";
import appColor from "../../constants/colors";

export const CreateAccountLink = styled.a`
  color: ${appColor.green.toString()};
  cursor: pointer;
`;

export const Span = styled.span`
  font: bold 14px/20px;
  color: ${appColor.grayAccent.toString()};
`;

export const UnderlinedButton = styled.u`
  color: ${appColor.green.toString()};
`;

export const TermsContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;