import './App.css';

import Monitor from './components/monitor'

// モジュール群
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <p className="title">PUIPUI-Ore-HUB</p>
      </header>
      <Monitor />
    </div>
  );
}

export default App;
