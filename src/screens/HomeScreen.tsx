import React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import FullScreenLoader from '../components/FullScreenLoader';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';

const HomeScreen = () => {
  const {movies, loading} = useMovies();
  const {top} = useSafeAreaInsets();
  const {width} = useWindowDimensions();

  if (loading) {
    return <FullScreenLoader />;
  }

  return (
    <View style={{marginTop: top + 20}}>
      <Carousel
        contentContainerCustomStyle={styles.carouselContainer}
        data={movies.results}
        renderItem={({item: movie}) => (
          <MoviePoster movie={movie} key={movie.id} />
        )}
        sliderWidth={width}
        itemWidth={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 330,
    alignItems: 'center',
  },
});

export default HomeScreen;
