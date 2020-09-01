import { Box } from 'theme-ui';
import { ResponsiveValue, TLengthStyledSystem, system, grid, GridProps } from 'styled-system';
import styled, { StyledComponent } from '@emotion/styled';

const px = (value: TLengthStyledSystem): string => (typeof value === 'number' ? `${value}px` : value);

const getMinMaxValue = (value: TLengthStyledSystem, scale: TLengthStyledSystem[] = []) =>
  px(scale[value as number] || value);

export type StackProps = GridProps & {
  /** Minimum width of a child, will create responsive CSS Grid layout like
   * `grid-template-columns: repeat(auto-fit, minmax($minColumnWidth$)}, 1fr))`.
   * (You can use either this prop or `numColumns` but not both.)
   */
  minColumnWidth?: ResponsiveValue<TLengthStyledSystem>;
  /** Number of columns, will create a responsive CSS Grid layout like
   * `grid-template-columns: repeat($numColumns$, 1fr))`.
   * (You can use either this prop or `minColumnWidth` but not both.)
   */
  numColumns?: ResponsiveValue<number>;
};

export const Stack: StyledComponent<GridProps, any, any> = styled(Box)<StackProps>(
  { display: 'grid' },
  grid,
  system({
    minColumnWidth: {
      property: 'gridTemplateColumns',
      scale: 'space',
      transform: (value, scale) =>
        value ? `repeat(auto-fit, minmax(${getMinMaxValue(value, scale as TLengthStyledSystem[])}, 1fr))` : null,
    },
    numColumns: {
      property: 'gridTemplateColumns',
      transform: (value) => (value ? `repeat(${value}, 1fr)` : null),
    },
  })
);

export default Stack;
