import { css, Global } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import * as React from 'react';

import { Theme } from '../../theme/index';

const GStyle: React.FC<{ theme: Theme }> = props => {
  const styles = (theme: Theme) => css`
    body {
      color: ${theme.colors.text};
      font-family: ${theme.fonts.text};
    }
  `;
  return <Global styles={styles(props.theme)} />;
};
export const GlobalStyle: React.FC<{}> = withTheme(GStyle);
