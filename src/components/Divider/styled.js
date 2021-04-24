import styled from "styled-components";
import appColors from '../../constants/colors'

export const RightBar = styled.div`
  background-color: ${appColors.grayAccent};
  height: 1px;
  width: 100%;
`;

export const LeftBar = styled.div`
  background-color: ${appColors.grayAccent};
  height: 1px;
  width: 100%;
`;

export const Text = styled.p`
  color: #707070;
  font: normal normal normal 14px/18px;
  margin-left: 8px;
  margin-right: 8px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  width: 356px;
`;
