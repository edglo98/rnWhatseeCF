import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goDetail = () => {
    navigation.navigate('detail' as any);
  };

  return (
    <View>
      <Text>homeScreen</Text>
      <Button title="Go to Details" onPress={goDetail} />
    </View>
  );
};

export default HomeScreen;
