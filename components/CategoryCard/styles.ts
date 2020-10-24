import { Dimensions, ViewProps } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../GlobalColors';

export const CategoryCardContainer = styled.View`
  border: ${colors.gray};
  border-radius: 15px;
  width: 170px;
  height: 60px;
  padding: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
`;

export const CategoryCardInside = styled.View`
  align-items: center;
  flex:1;
  flex-direction: row;
`;

interface CategoryBgProps extends ViewProps {
  bgColor: string,
}

export const CategoryBg = styled.View<CategoryBgProps>`
  height: 40px;
  width: 40px;
  background-color: ${props => props.bgColor};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  `;


export const CardTitle = styled.Text`
 color: black;
 font-size: 18px;
 font-weight: bold;
 margin-left: 10px;
`;
