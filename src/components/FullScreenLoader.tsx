import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const FullScreenLoader = () => {
  return (
    <View style={styles.fullScreen}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

export default FullScreenLoader;

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
