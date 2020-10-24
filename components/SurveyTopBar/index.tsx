import React from 'react';
import Progress from '../Progress';
import { Entypo } from '@expo/vector-icons';
import { Container, TopBarRow, SurveyStepTopBar, SurveyTopBarInside, ActualStep, StepView } from './styles';
import colors from '../../GlobalColors';
import { useNavigation } from '@react-navigation/native';

const SurveyTopBar: React.FC = (props) => {
  const navigation = useNavigation();
  return (
    <Container>
      <SurveyTopBarInside>
        <TopBarRow>
          <Entypo name="chevron-left" size={28} color="#000" onPress={() => navigation.goBack()} />
          <StepView>
            <SurveyStepTopBar>
              <ActualStep>2 </ActualStep>of 10</SurveyStepTopBar>
          </StepView>
        </TopBarRow>
        <Progress progress={40} bgColor={colors.lightBlue} />
      </SurveyTopBarInside>
    </Container>
  );
};

export default SurveyTopBar;
