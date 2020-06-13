import theme from '@theme-ui/preset-tailwind';

export const sizes = {
  ...(theme.sizes && theme.sizes),
  sectionContentMax: 1200,
  sectionContent: ['90%', '90%', '70%'],
};
// margin and padding
export const space = [...(theme.space && theme.space), '0em', '0.5em', '1em', '2em', '3em', '4em', '5em', '6em'];
