import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import useMovies from '../hooks/useMovies';

const HomeScreen = () => {
  const {movies, loading} = useMovies();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <View>
      {movies.results.map(movie => (
        <View key={movie.id}>
          <Text>{movie.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default HomeScreen;
