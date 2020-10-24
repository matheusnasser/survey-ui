import { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../GlobalColors';

export const SurveySliderOutside = styled.View`
height: 8px;
width: 100%;
background-color: ${colors.gray}
border-radius: 5px;

`;


interface SurveySliderInsideProps extends ViewProps {
  progress: number,
  bgColor: string,
}
export const SurveySliderInside = styled.View<SurveySliderInsideProps>`
  height: 8px;
  width: ${props => props.progress}%;
  background-color: ${props => props.bgColor}
  border-radius: 5px;
`;
