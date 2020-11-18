import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ClienteProvider } from './context';

import FirstScreen from './pages/firstPage';
import SecondScreen from './pages/secondPage';

function App() {

  return (
    <BrowserRouter>
      <ClienteProvider>
        <Switch>
          <Route path="/" exact component={FirstScreen} />
          <Route path='/2' component={SecondScreen} />

        </Switch>
      </ClienteProvider>
    </BrowserRouter>
  );
}

export default App;
