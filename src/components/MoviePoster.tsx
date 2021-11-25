import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Movie} from '../interfaces/movieInterfaces';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigations/MainNavigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'home'>;

const MoviePoster = ({movie, height = 300, width = 200}: Props) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleNavigateToMovieDetails = () => {
    navigation.navigate('moviedetails', movie);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleNavigateToMovieDetails}
      style={[styles.imageContainer, {height, width}]}>
      <Image style={styles.image} source={{uri: imageUrl}} />
    </TouchableOpacity>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.65,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    flex: 1,
    borderRadius: 15,
  },
});
