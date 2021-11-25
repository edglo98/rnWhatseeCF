import React from 'react';
import {ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import FullScreenLoader from '../components/FullScreenLoader';
import HorizontalSlider from '../components/HorizontalSlider';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';

const HomeScreen = () => {
  const {
    nowPlayingMovies,
    popularMovies,
    topRadeMovies,
    upcomingMovies,
    loading,
  } = useMovies();
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
            data={nowPlayingMovies.results}
            renderItem={({item: movie}) => (
              <MoviePoster movie={movie} key={movie.id} />
            )}
            sliderWidth={width}
            itemWidth={200}
          />
        </View>
        <HorizontalSlider
          movies={topRadeMovies.results}
          title="Mejor votadas"
        />
        <HorizontalSlider
          movies={popularMovies.results}
          title="Ahora en cines"
        />
        <HorizontalSlider
          movies={upcomingMovies.results}
          title="Proximamente"
        />
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
