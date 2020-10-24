import { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../GlobalColors';

export const SurveyBody = styled.View`
  flex-direction: row;
  width: 80%;
  margin-top: 20px;
`;
export const SurveyImage = styled.Image`
  height: 65px;
  width: 65px;
  border-radius: 15px;
`;

export const SurveyInfoWrapper = styled.View`
  margin-left: 15px;
  width: 100%;
  flex-direction: column;
`;

export const StepTitleContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
 `;

export const SurveyTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.darkGrey}
`;

export const SurveyStep = styled.Text`
  font-size: 15px;
  color: ${colors.darkGrey};
  font-weight: 600;
`;






