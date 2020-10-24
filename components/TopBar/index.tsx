import React from 'react';
import { Text } from 'react-native';
import { Octicons, Feather } from '@expo/vector-icons';

import { TopBarMainContainer, TopBarInside } from './styles';

const TopBar: React.FC = () => {
  return (
    <TopBarMainContainer>
      <TopBarInside>
        <Octicons name="three-bars" size={24} color="black" />
        <Feather name="bell" size={24} color="black" />
      </TopBarInside>
    </TopBarMainContainer>
  );
};

export default TopBar;
