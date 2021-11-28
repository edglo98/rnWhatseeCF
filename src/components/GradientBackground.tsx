import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  children: React.ReactNode;
  colors: string[];
}

const GradientBackground = ({children}: Props) => {
  return (
    <View style={[styles.backgroundContainer]}>
      <LinearGradient
        style={{...StyleSheet.absoluteFillObject}}
        colors={['#084F6A', '#75CEDB', 'white']}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
      />
      {children}
    </View>
  );
};

export default GradientBackground;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
});
