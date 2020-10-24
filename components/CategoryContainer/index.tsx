import { AntDesign, Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, FlatList, View } from 'react-native';
import colors from '../../GlobalColors';
import CategoryCard from '../CategoryCard';

import { CategoryWrapper } from './styles';

const CategoryContainer: React.FC = () => {

  let data = [
    {
      id: 0,
      title: "Science",
      icon: <AntDesign name="hourglass" size={24} color="white" />,
      bgColor: colors.darkBlue,
    },
    {
      id: 1,
      title: "Social",
      icon: <Ionicons name="ios-git-network" size={24} color="white" />,
      bgColor: colors.cardRed,
    },
    {
      id: 2,
      title: "Tech",
      icon: <MaterialCommunityIcons name="mouse-variant" size={24} color="white" />,
      bgColor: colors.cardGreen,
    },
    {
      id: 3,
      title: "Gaming",
      icon: <MaterialCommunityIcons name="google-controller" size={24} color="white" />,
      bgColor: colors.darkBlue,
    },
    {
      id: 4,
      title: "History",
      icon: <FontAwesome name="hourglass-1" size={24} color="white" />,
      bgColor: colors.cardRed,
    },
    {
      id: 5,
      title: "Analytics",
      icon: <AntDesign name="linechart" size={24} color="white" />,
      bgColor: colors.cardGreen,
    },

  ]
  return (
    <CategoryWrapper >
      <FlatList data={data}
        numColumns={2}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <>
            <CategoryCard bgColor={item.bgColor} cardTitle={item.title}>
              {item.icon}
            </CategoryCard>
          </>
        )} />
    </CategoryWrapper>

  );
};

export default CategoryContainer;
