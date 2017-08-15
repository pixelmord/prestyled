/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>
    { storyFn() }
  </ThemeProvider>
);
addDecorator(ThemeDecorator);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
