import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const MainStack = createStackNavigator();

const MainNavigation = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <MainStack.Screen name="home" component={HomeScreen} />
      <MainStack.Screen name="detail" component={DetailScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
