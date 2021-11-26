import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RootStackParams} from '../navigations/MainNavigation';
import useMovieDetails from '../hooks/useMovieDetails';
import ActorCard from '../components/ActorCard';
import HorizontalSlider from '../components/HorizontalSlider';
import {theme} from '../theme/theme';
import {formatDolars} from '../utils/intl';
import {TouchableOpacity} from 'react-native-gesture-handler';
const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'moviedetails'> {}

const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {loading, movieInformation, movieCredits} = useMovieDetails(movie.id);
  const goback = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.closeButton}>
          <TouchableOpacity onPress={goback}>
            <Icon name="close" color="black" size={45} />
          </TouchableOpacity>
        </View>
        <Image source={{uri}} style={styles.image} />
      </View>
      <Text style={[theme.subtitle, styles.date]}>{movie.release_date}</Text>
      <View style={styles.titles}>
        <Text style={theme.subtitle}>{movie.original_title}</Text>
        <Text style={theme.title}>{movie.title}</Text>
      </View>
      <View style={[styles.section, styles.row]}>
        <Icon name="star" color="grey" size={20} />
        <Text style={theme.subtitle}> {movie.vote_average}</Text>
        <Text style={theme.subtitle}>
          {' '}
          - {movieInformation?.genres.map(g => g.name).join(', ')}
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={theme.subtitle}>Presupuesto</Text>
        <Text style={theme.body}>
          Inversion {formatDolars(movieInformation?.budget || 0)}
        </Text>
        <Text style={theme.body}>
          Ganancias {formatDolars(movieInformation?.revenue || 0)}
        </Text>
      </View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.section}>
          <Text style={theme.subtitle}>Descripción</Text>
          <Text style={theme.body}>{movieInformation?.overview}</Text>
        </View>
      )}
      {loading ? (
        <ActivityIndicator />
      ) : (
        <HorizontalSlider
          data={movieCredits?.cast || []}
          title={<Text style={[theme.subtitle, styles.section]}>Reparto</Text>}
          renderItem={({item: cast}) => (
            <ActorCard key={cast.id} actor={cast} />
          )}
        />
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
    paddingHorizontal: 20,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    paddingTop: 10,
    paddingRight: 20,
    textAlign: 'right',
  },
  titles: {
    paddingHorizontal: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 10,
    zIndex: 1,
  },
});

export default DetailScreen;
