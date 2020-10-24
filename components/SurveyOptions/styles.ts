import { Dimensions, TextProps, ViewProps } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../GlobalColors';


interface ContainerProps extends ViewProps {
  selected: boolean,
}


export const Container = styled.View<ContainerProps>`
  border: ${props => props.selected ? colors.lightBlue : colors.darkGrey};
  border-radius: 10px;
  width: 100%;
  height: 70px;
  padding: 10px;
  margin-top: 25px;
  justify-content: center;
 `;

interface OptionProps extends TextProps {
  selected: boolean,
}

export const Option = styled.Text<OptionProps>`
  font-weight: 500,
  font-size: 17px;
  color: ${props => props.selected ? colors.lightBlue : colors.darkGrey};
`;
