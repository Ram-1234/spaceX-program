import React from 'react';
import Apps from './components/Apps';
import { Breakpoint, BreakpointProvider } from 'react-socks';

function App() {
  return (
    <BreakpointProvider>
        <Apps/>
     </BreakpointProvider>
  );
}

export default App;
