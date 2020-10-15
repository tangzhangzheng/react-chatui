import React from 'react';
import ChatApp from 'components/ChatApp/index'
import { ThemeProvider } from 'styled-components';
import theme from './theme.js'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChatApp />
    </ThemeProvider>
  );
}

export default App;
