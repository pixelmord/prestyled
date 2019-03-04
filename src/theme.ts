const colors = {
  /* Colors (most courtesy of http://clrs.cc/) */
  colorAqua: '#7fdbff',
  colorBlack: '#111',
  colorBlue: '#0074d9',
  colorFuchsia: '#f012be',
  colorGray: '#aaa',
  colorGreen: '#2ecc40',
  colorLime: '#01ff70',
  colorMaroon: '#85144b',
  colorNavy: '#001f3f',
  colorOlive: '#3d9970',
  colorOrange: '#ff851b',
  colorPurple: '#b10dc9',
  colorRed: '#ff4136',
  colorSilver: '#ddd',
  colorTeal: '#39cccc',
  colorWhite: 'white',
  colorYellow: '#ffdc00',
};

const components = {
  /* Components */
  componentBgColor: '#f2f2f2',
  componentBorderColor: '#ddd',
  componentBorderRadius: '.25rem',
  componentBorderWidth: '1px',
  componentBoxShadowInner: 'inset 0 1px 1px rgba(0, 0, 0, .05)',
  componentBoxShadowOuter: '0 1px 0 rgba(0, 0, 0, .05)',
  componentFocusWidth: '2px',
  componentPaddingX: '1rem',
  componentPaddingY: '1rem',
  componentSpeed: '.1s',
};

const theme = {
  name: 'Default',
  /* Colors */
  ...colors,
  /* Special colors */
  colorPrimary: colors.colorBlue,
  /* Components */
  ...components,
};
export default theme;
