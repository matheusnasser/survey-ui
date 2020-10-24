import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { MainWrapper, TitleContainer, Title, SubTitle } from './styles';
import TopBar from '../../components/TopBar';
import CategoryContainer from '../../components/CategoryContainer';
import AllSurveyComponent from '../../components/AllSurveyComponent';
import { useNavigation } from '@react-navigation/native';



const Main: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate("Survey")
  }, [])
  return (
    <MainWrapper>
      <SafeAreaView>
        <TopBar />
      </SafeAreaView>
      <TitleContainer>
        <Title>Todays Surveys</Title>
        <SubTitle>5 upcoming surveys</SubTitle>
      </TitleContainer>
      <CategoryContainer />
      <TitleContainer>
        <Title>All Surveys</Title>
      </TitleContainer>
      <AllSurveyComponent />
    </MainWrapper>

  );
};

export default Main;
