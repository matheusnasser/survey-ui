import React from 'react';
import { Text } from 'react-native';

import { SurveySliderInside, SurveySliderOutside } from './styles';

type Props = {
  progress: number,
  bgColor: string,
}
const Progress: React.FC<Props> = ({ progress, bgColor }) => {
  return (
    <SurveySliderOutside>
      <SurveySliderInside progress={progress} bgColor={bgColor} />
    </SurveySliderOutside>
  );
};

export default Progress;
