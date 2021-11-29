import {useContext} from 'react';
import {GradientContext} from '../context/GradientContext';

const useGradientContext = () => {
  const {colors, prevColors, updateColors, changeColors, changePrevColors} =
    useContext(GradientContext);

  return {
    colors,
    prevColors,
    updateColors,
    changeColors,
    changePrevColors,
  };
};

export default useGradientContext;
