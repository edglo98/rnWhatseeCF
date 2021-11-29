import React, {useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import useFade from '../hooks/useFade';
import useGradientContext from '../hooks/useGradientContext';

interface Props {
  children: React.ReactNode;
  colors: string[];
}

const GradientBackground = ({children}: Props) => {
  const {colors, prevColors, changePrevColors} = useGradientContext();
  const {opacity, fadeIn, fadeOut} = useFade();

  useEffect(() => {
    fadeIn(() => {
      changePrevColors(colors);
      fadeOut();
    });
  }, [colors, changePrevColors, fadeIn, fadeOut]);

  return (
    <View style={[styles.backgroundContainer]}>
      <LinearGradient
        style={{...StyleSheet.absoluteFillObject}}
        colors={Object.values(prevColors)}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
      />
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity,
        }}>
        <LinearGradient
          style={{...StyleSheet.absoluteFillObject}}
          colors={Object.values(colors)}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.7}}
        />
      </Animated.View>
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
