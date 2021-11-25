import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Movie} from '../interfaces/movieInterfaces';
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
  title: string;
}

const HorizontalSlider = ({movies, title}: Props) => {
  return (
    <View>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({item: movie}) => (
          <MoviePoster height={200} width={130} movie={movie} key={movie.id} />
        )}
      />
    </View>
  );
};

export default HorizontalSlider;

const styles = StyleSheet.create({
  list: {
    padding: 15,
  },
  separator: {
    width: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1c1c1c',
    marginLeft: 15,
  },
});
