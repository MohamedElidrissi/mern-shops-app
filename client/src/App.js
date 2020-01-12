import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import AuthState from './context/auth/AuthState';
import ProtectedRoute from './components/routing/ProtectedRoute';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <AuthState>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/nearby" />
            <ProtectedRoute path="/nearby" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </BrowserRouter>
      </AuthState>
    </div>
  );
}

export default App;
