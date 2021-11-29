import React, {createContext, FC, useState} from 'react';

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  updateColors: (colors: ImageColors) => void;
  changeColors: (newColors: ImageColors) => void;
  changePrevColors: (newColors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

const GradientProvider: FC = ({children}) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const updateColors = (newColors: ImageColors) => {
    setColors(newColors);
    setPrevColors(colors);
  };

  const changeColors = (newColors: ImageColors) => {
    setColors(newColors);
  };

  const changePrevColors = (newColors: ImageColors) => {
    setPrevColors(newColors);
  };

  return (
    <GradientContext.Provider
      value={{
        colors,
        prevColors,
        updateColors,
        changeColors,
        changePrevColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};

export default GradientProvider;
