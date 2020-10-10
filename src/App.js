import React from 'react';
import styled from 'styled-components';

const StyleH1 = styled.h1`
color:${({ theme }) => theme.green}

`
function App() {
  return (
    <div >
    <StyleH1> SB</StyleH1>
    </div>
  );
}

export default App;
