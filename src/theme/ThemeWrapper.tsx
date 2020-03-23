/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import theme from './index';

export const ThemeWrapper: React.FC = (props: { children: JSX.Element }) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
export default ThemeWrapper;
