import theme from '@theme-ui/preset-tailwind';
const createMediaQuery = (n: string): string => `@media screen and (min-width:${n})`;

const aliases = ['sm', 'md', 'lg', 'xl', 'xxl'];
const breakpointStrings: string[] = [32, 40, 48, 64, 75].map((n: number): string => n + 'em');
export const breakpoints: {
  [key: string]: string;
} = breakpointStrings.reduce(
  (acc, curr, index): Record<string, unknown> => ({
    ...acc,
    [`${aliases[index]}`]: curr,
  }),
  {}
);

export const mediaQueries: {
  [key: string]: string;
} = breakpointStrings.map(createMediaQuery).reduce(
  (acc, curr, index): Record<string, unknown> => ({
    ...acc,
    [`${aliases[index]}`]: curr,
  }),
  { ...(theme.mediaQueries && theme.mediaQueries) }
);
