import ImageColors from 'react-native-image-colors';

export const getColorsFromImage = async (imageUri: string) => {
  const colors = await ImageColors.getColors(imageUri, {
    fallback: '#228B22',
  });
  if (colors.platform === 'android') {
    return [colors.dominant, colors.darkVibrant];
  } else if (colors.platform === 'ios') {
    return [colors.background, colors.secondary];
  } else {
    return ['#ff00ff', '#00ffff'];
  }
};
