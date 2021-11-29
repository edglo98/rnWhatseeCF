import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigations/MainNavigation';
import GradientProvider from './src/context/GradientContext';

const App = () => {
  return (
    <NavigationContainer>
      <GradientProvider>
        <MainNavigation />
      </GradientProvider>
    </NavigationContainer>
  );
};

export default App;
