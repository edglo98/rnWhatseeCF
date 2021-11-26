import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interfaces/movieInterfaces';
import {theme} from '../theme/theme';

interface Props {
  actor: Cast;
}
const ActorCard = ({actor}: Props) => {
  return (
    <View key={actor.id} style={styles.actorItem}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${actor.profile_path}`,
        }}
        style={styles.actorImage}
      />
      <Text style={theme.subtitle}>{actor.character}</Text>
      <Text style={theme.title}>{actor.name}</Text>
    </View>
  );
};

export default ActorCard;

const styles = StyleSheet.create({
  actorItem: {
    width: 150,
    marginBottom: 10,
  },
  actorImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
});
