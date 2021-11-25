import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import {Movie} from '../interfaces/movieInterfaces';

export type RootStackParams = {
  home: undefined;
  moviedetails: Movie;
};

const MainStack = createStackNavigator<RootStackParams>();

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
      <MainStack.Screen name="moviedetails" component={DetailScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
