import React from 'react';
import ChatApp from 'components/ChatApp/index'
import { ThemeProvider } from 'styled-components';
import theme from './theme.js'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ChatApp />
      </ThemeProvider>
    </Router>

  );
}

export default App;
