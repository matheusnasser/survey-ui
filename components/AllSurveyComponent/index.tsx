import React from 'react';
import { Text } from 'react-native';
import SurveyRow from '../SurveyRow';

import { SurveyContainer, } from './styles';

const AllSurveyComponent: React.FC = () => {
  return (
    <SurveyContainer>
      <SurveyRow
        progress={50}
        image="https://blog.novasafra.com.br/wp-content/uploads/2018/03/comida-arabe-780x450.jpg"
        title="Food Survey"
        stepDone="4"
        finalStep="15"
      />
      <SurveyRow
        title="Business Survey"
        progress={30}
        finalStep="10"
        stepDone="1"
        image="https://www.yourvalued.co.uk/wp-content/uploads/2018/11/value-business.jpg"
      />
      <SurveyRow
        title="Travel Survey"
        progress={80}
        finalStep="5"
        stepDone="4"
        image="https://blog.novasafra.com.br/wp-content/uploads/2018/03/comida-arabe-780x450.jpg"
      />
    </SurveyContainer>
  );
};

export default AllSurveyComponent;
