import React from 'react';
import WbnPlayer from './WbnPlayer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyles from '../styles/GlobalStyle'

const App = () => {
  return (
    <BrowserRouter basename="/react_videoplayer/">
      <>
        <Switch>
          <Route exact path="/" component={WbnPlayer} />
          <Route exact path="/:activeVideo" compoent={WbnPlayer} />
        </Switch>
        <GlobalStyles />
      </>
    </BrowserRouter>
  )
}

export default App;