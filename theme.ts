const colors = {
  /* Colors (most courtesy of http://clrs.cc/) */
  colorWhite: 'white',
  colorNavy: '#001f3f',
  colorBlue: '#0074d9',
  colorAqua: '#7fdbff',
  colorTeal: '#39cccc',
  colorOlive: '#3d9970',
  colorGreen: '#2ecc40',
  colorLime: '#01ff70',
  colorYellow: '#ffdc00',
  colorOrange: '#ff851b',
  colorRed: '#ff4136',
  colorMaroon: '#85144b',
  colorFuchsia: '#f012be',
  colorPurple: '#b10dc9',
  colorBlack: '#111',
  colorGray: '#aaa',
  colorSilver: '#ddd'
};

const components = {
  /* Components */
  componentBgColor: '#f2f2f2',
  componentBorderColor: '#ddd',
  componentBorderRadius: '.25rem',
  componentBorderWidth: '1px',
  componentFocusWidth: '2px',
  componentPaddingX: '1rem',
  componentPaddingY: '1rem',
  componentSpeed: '.1s',
  componentBoxShadowInner: 'inset 0 1px 1px rgba(0, 0, 0, .05)',
  componentBoxShadowOuter: '0 1px 0 rgba(0, 0, 0, .05)'
};

const theme = {
  name: 'Default',
  /* Colors */
  ...colors,
  /* Special colors */
  colorPrimary: colors.colorBlue,
  /* Components */
  ...components
};
export default theme;
