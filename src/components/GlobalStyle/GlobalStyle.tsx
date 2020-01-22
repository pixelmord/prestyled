import { css, Global, SerializedStyles } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import * as React from 'react';

import { PrestyledTheme as Theme } from '../../theme/index';

const GStyle: React.FC<{ theme: Theme }> = (props: { theme: Theme }): React.ReactElement => {
  const styles = (theme: Theme): SerializedStyles => css`
    body {
      color: ${theme.colors.text};
      font-family: ${theme.fonts.text};
    }
  `;
  return <Global styles={styles(props.theme)} />;
};
export const GlobalStyle: React.FC<{}> = withTheme(GStyle);
