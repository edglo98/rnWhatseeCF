import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import FullScreenLoader from '../components/FullScreenLoader';
import GradientBackground from '../components/GradientBackground';
import HorizontalSlider from '../components/HorizontalSlider';
import MoviePoster from '../components/MoviePoster';
import useGradientContext from '../hooks/useGradientContext';
import useMovies from '../hooks/useMovies';
import {getColorsFromImage} from '../utils/colors';

const HomeScreen = () => {
  const {
    nowPlayingMovies,
    popularMovies,
    topRadeMovies,
    upcomingMovies,
    loading,
  } = useMovies();
  const {updateColors} = useGradientContext();
  const {top} = useSafeAreaInsets();
  const {width} = useWindowDimensions();

  const getPosterColor = async (index: number) => {
    const posterPath = nowPlayingMovies.results[index].poster_path;
    const uriImg = `https://image.tmdb.org/t/p/w500${posterPath}`;
    const [primary = 'blue', secondary = 'blue'] = await getColorsFromImage(
      uriImg,
    );
    updateColors({
      primary,
      secondary,
    });
  };

  useEffect(() => {
    if (nowPlayingMovies.results.length > 0) {
      getPosterColor(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlayingMovies.results]);

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
