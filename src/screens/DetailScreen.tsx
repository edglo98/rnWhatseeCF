import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RootStackParams} from '../navigations/MainNavigation';
import useMovieDetails from '../hooks/useMovieDetails';
const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'moviedetails'> {}

const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {loading, movieInformation, movieCast} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>{movie.id}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <Icon name="star-outline" color="grey" size={30} />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.section}>
          <Text style={styles.subtitle}>Overview</Text>
          <Text style={styles.title}>{movieInformation?.overview}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: screenHeight * 0.7,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  imageContainer: {
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.65,
    shadowRadius: 3.84,

    elevation: 5,
  },
  section: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: 'grey',
  },
});

export default DetailScreen;
