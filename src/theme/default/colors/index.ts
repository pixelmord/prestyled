import theme from '@theme-ui/preset-tailwind';
import { transparentize } from '@theme-ui/color';

export const baseColors = {
  ...theme.colors,
  transparent: 'transparent',
  text: 'grayBlack',
  background: '#ffffff',
  primary: '#3333ee',
  secondary: '#111199',
  muted: '#f6f6f6',
  highlight: '#efeffe',
  accent: '#660099',
  darken: 'rgba(0, 0, 0, .25)',

  /* Colors (most courtesy of http://clrs.cc/) */
  aqua: '#7fdbff',
  black: '#111',
  blue: '#0074d9',
  fuchsia: '#f012be',
  green: '#2ecc40',
  lime: '#01ff70',
  maroon: '#85144b',
  navy: '#001f3f',
  olive: '#3d9970',
  orange: '#ff851b',
  purple: '#b10dc9',
  red: '#ff4136',
  silver: '#ddd',
  teal: '#39cccc',
  white: 'white',
  yellow: '#ffdc00',
};

export const grayScale = {
  grayBlack: '#22292f',
  grayDarkest: '#3d4852',
  grayDarker: '#606f7b',
  grayDark: '#8795a1',
  gray: '#b8c2cc',
  grayLight: '#dae1e7',
  grayLighter: '#f1f5f8',
  grayLightest: '#f8fafc',
};

export const colors = {
  ...baseColors,
  ...grayScale,
  primary: baseColors.blue,
  background: baseColors.white,
  text: grayScale.grayDarkest,
  msAppTileColor: grayScale.grayDarkest,
  modes: {
    dark: {
      text: baseColors.gray[4],
      textInverted: baseColors.gray[5],
      background: baseColors.gray[9],
      backgroundTransparent: transparentize(baseColors.gray[9], 0.8),
      backgroundInverted: baseColors.black,
      primary: '#0cf',
      secondary: '#90c',
    },
  },
};
