import styled from 'styled-components/native';
import colors from '../../GlobalColors';

export const Container = styled.View`
flex:1;
`;
export const OptionsContainer = styled.View`
  flex:1;
  align-items: center;
  padding: 30px;
  width: 100%;
  margin-top: -30px;
`;


export const NextButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${colors.darkBlue};
  padding: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  border-radius: 10px;
`;

export const NextButtonText = styled.Text`
  color: white;
  font-size: 15px;
`;

