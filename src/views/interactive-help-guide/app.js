import { useState } from 'react';
import { Button } from '@mui/material';

import { HelpSequence } from './help-sequence';
import logo from './logo.svg';

export function App() {
  const [showHelp, setShowHelp] = useState(false);

  const sequence = [
    {
      forElement: 'p',
      text: 'This is some introductory text telling you how to start'
    },
    {
      forElement: '.App-link',
      text: 'This will show you how to use React'
    },
    {
      forElement: '.App-nowhere',
      text: 'This help text will never appear'
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>

      <Button onClick={() => setShowHelp(true)}>Show help</Button>
      <HelpSequence sequence={sequence} open={showHelp} onClose={() => setShowHelp(false)} />
    </div>
  );
}
