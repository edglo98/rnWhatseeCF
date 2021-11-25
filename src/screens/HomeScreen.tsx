import React from 'react';
import {ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import FullScreenLoader from '../components/FullScreenLoader';
import HorizontalSlider from '../components/HorizontalSlider';
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
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View>
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
        <HorizontalSlider movies={movies.results} title="En cine" />
        <HorizontalSlider movies={movies.results} title="En cine" />
        <HorizontalSlider movies={movies.results} title="En cine" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 330,
    alignItems: 'center',
  },
});

export default HomeScreen;
