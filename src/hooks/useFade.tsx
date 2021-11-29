import {useRef} from 'react';
import {Animated} from 'react-native';

const useFade = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = (callback?: () => void) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => callback && callback());
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacity,
    fadeIn,
    fadeOut,
  };
};

export default useFade;
