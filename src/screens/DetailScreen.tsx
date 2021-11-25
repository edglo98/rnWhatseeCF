import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackParams} from '../navigations/MainNavigation';

interface Props extends StackScreenProps<RootStackParams, 'moviedetails'> {}

const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  console.log(movie);
  return (
    <View>
      <Text>{movie.title}</Text>
    </View>
  );
};

export default DetailScreen;
