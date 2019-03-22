import { css, Global } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import * as React from 'react';

import { Theme } from '../../theme';

export const GlobalStyle: React.FC<{}> = withTheme(
  ({ theme: defaultTheme }) => {
    const styles = (theme: Theme = defaultTheme) => css`
      body {
        color: ${theme.colors.text};
        font-family: ${theme.fonts.text};
      }
    `;
    return <Global styles={styles} />;
  }
);
