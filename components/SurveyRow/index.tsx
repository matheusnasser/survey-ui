import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import colors from '../../GlobalColors';
import Progress from '../Progress';

import { SurveyBody, SurveyTitle, SurveyImage, SurveyInfoWrapper, SurveyStep, StepTitleContainer } from './styles';

type Props = {
  progress: number,
  title: string,
  stepDone: string,
  finalStep: string,
  image: string,

}

const SurveyRow: React.FC<Props> = ({ progress, stepDone, finalStep, title, image, }) => {
  const navigation = useNavigation();

  return (
    <SurveyBody>
      <SurveyImage source={{ uri: image }} />
      <SurveyInfoWrapper>
        <TouchableOpacity onPress={() => navigation.navigate("Survey")} >
          <StepTitleContainer>
            <SurveyTitle>
              {title}
            </SurveyTitle>
            <SurveyStep>
              {stepDone}/{finalStep}
            </SurveyStep>
          </StepTitleContainer>
        </TouchableOpacity>
        <Progress progress={progress} bgColor={colors.darkBlue} />
      </SurveyInfoWrapper>
    </SurveyBody >
  );
};

export default SurveyRow;
