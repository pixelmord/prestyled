/** @jsx jsx */
import { jsx, ThemeProvider, useColorMode, Flex } from 'theme-ui';
import theme from '.';

const ThemeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <button
      onClick={() => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default');
      }}
    >
      Toggle ColorMode: {colorMode === 'default' ? 'Dark' : 'Light'}
    </button>
  );
};
export const ThemeWrapper: React.FC = (props: React.PropsWithChildren<Record<string, unknown>>) => {
  return (
    <ThemeProvider theme={theme}>
      <div
        sx={{
          backgroundColor: 'background',
          p: 4,
          borderRadius: 3,
        }}
      >
        <Flex sx={{ justifyContent: 'flex-end' }}>
          <ThemeSwitcher />
        </Flex>

        {props.children}
      </div>
    </ThemeProvider>
  );
};
export default ThemeWrapper;
