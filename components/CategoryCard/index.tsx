import React from 'react';

import { CardTitle, CategoryCardContainer, CategoryCardInside, CategoryBg } from './styles';

type Props = {
  bgColor: string,
  cardTitle: string,
}

const CategoryCard: React.FC<Props> = ({ bgColor, cardTitle, children }) => {
  return (
    <CategoryCardContainer>
      <CategoryCardInside>
        <CategoryBg bgColor={bgColor} >
          {children}
        </CategoryBg>
        <CardTitle>{cardTitle}</CardTitle>
      </CategoryCardInside>
    </CategoryCardContainer>
  );
};

export default CategoryCard;
