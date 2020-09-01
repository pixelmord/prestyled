import { ResponsiveValue, TLengthStyledSystem, GridProps } from 'styled-system';
import { StyledComponent } from '@emotion/styled';
export declare type StackProps = GridProps & {
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
export declare const Stack: StyledComponent<GridProps, any, any>;
export default Stack;
