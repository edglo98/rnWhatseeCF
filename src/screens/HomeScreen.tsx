import React from 'react';
import {ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors';
import FullScreenLoader from '../components/FullScreenLoader';
import GradientBackground from '../components/GradientBackground';
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

  const getPosterColor = async (index: number) => {
    const posterPath = nowPlayingMovies.results[index].poster_path;
    const uriImg = `https://image.tmdb.org/t/p/w500${posterPath}`;
    const colors = await ImageColors.getColors(uriImg, {
      fallback: '#228B22',
      cache: true,
      key: 'unique_key',
    });
    if (colors.platform === 'android') {
      return [colors.dominant, colors.average, colors.vibrant];
    } else if (colors.platform === 'ios') {
      return [colors.background, colors.primary, colors.secondary];
    }
  };

  if (loading) {
    return <FullScreenLoader />;
  }

  return (
    <GradientBackground colors={['blue']}>
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
              onSnapToItem={getPosterColor}
            />
          </View>
          <HorizontalSlider
            data={topRadeMovies.results}
            title="Mejor votadas"
            renderItem={({item: movie}) => (
              <MoviePoster
                height={200}
                width={130}
                movie={movie}
                key={movie.id}
              />
            )}
          />
          <HorizontalSlider
            data={popularMovies.results}
            title="Ahora en cines"
            renderItem={({item: movie}) => (
              <MoviePoster
                height={200}
                width={130}
                movie={movie}
                key={movie.id}
              />
            )}
          />
          <HorizontalSlider
            data={upcomingMovies.results}
            title="Proximamente"
            renderItem={({item: movie}) => (
              <MoviePoster
                height={200}
                width={130}
                movie={movie}
                key={movie.id}
              />
            )}
          />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 330,
    alignItems: 'center',
  },
});

export default HomeScreen;
