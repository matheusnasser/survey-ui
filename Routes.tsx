import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Main from './pages/Main';
import SurveyPage from './pages/SurveyPage';


const Routes: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, }}
      >
        <Stack.Screen component={Main} name="Main" />
        <Stack.Screen component={SurveyPage} name="Survey" />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Routes;
