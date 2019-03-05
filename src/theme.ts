const colors = {
  /* Colors (most courtesy of http://clrs.cc/) */
  aqua: '#7fdbff',
  black: '#111',
  blue: '#0074d9',
  fuchsia: '#f012be',
  gray: '#aaa',
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

// tslint:disable: object-literal-sort-keys
export const defaultTheme = {
  name: 'Default',
  /* Colors */
  colors: {
    ...colors,
    /* Special colors */
    primary: colors.blue,
  },
  fontSizes: [
    '0.625rem',
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.125rem',
    '1.5rem',
    '2rem',
    '3rem',
    '4rem',
  ],
  space: [
    // margin and padding
    0,
    '0.5em',
    '1em',
    '2em',
    '3em',
    '4em',
    '5em',
    '6em',
  ],
  /* Components */
  ...components,
};
export default defaultTheme;
