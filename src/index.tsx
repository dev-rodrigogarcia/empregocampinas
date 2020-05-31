import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { GlobalStyle } from './Theme/globalStyle'
import { ThemeProvider } from 'styled-components';
import { themeSettings } from './Theme/theme-settings'

const ROOT = document.getElementById('root')

ReactDOM.render(
  <ThemeProvider theme={themeSettings}>
    <App />
    <GlobalStyle />
  </ThemeProvider>,
  ROOT
);