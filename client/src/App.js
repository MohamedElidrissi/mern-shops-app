import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthState from './context/auth/AuthState';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <AuthState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </AuthState>
    </div>
  );
}

export default App;
