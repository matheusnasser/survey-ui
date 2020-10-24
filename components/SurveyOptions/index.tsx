import React, { useState } from 'react';
import { Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';

import { Container, Option } from './styles';

type Props = {
  title: string,
}

const SurveyOptions: React.FC<Props> = ({ title }) => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <TouchableWithoutFeedback onPress={() => setSelected(!selected)}>
      <Container selected={selected}>
        <Option selected={selected}>{title}</Option>
      </Container>
    </TouchableWithoutFeedback>

  );
};

export default SurveyOptions;
