import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import SurveyOptions from '../../components/SurveyOptions';
import SurveyTopBar from '../../components/SurveyTopBar';
import { Container, NextButton, NextButtonText, OptionsContainer } from './styles';

const SurveyPage: React.FC = (props) => {
  return (
    <Container>
      <SafeAreaView>
        <SurveyTopBar />
      </SafeAreaView>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 35, fontWeight: "bold", width: "80%" }}>Which one of the following is the greatest circle?</Text>
      </View>

      <OptionsContainer>
        <SurveyOptions title="Arctic Circle" />
        <SurveyOptions title="Equator" />
        <SurveyOptions title="Tropic of cancer" />
        <SurveyOptions title="Tropic of capricorn" />

        <NextButton>
          <NextButtonText>Next</NextButtonText>
        </NextButton>
      </OptionsContainer>
    </Container>
  );
};

export default SurveyPage;
