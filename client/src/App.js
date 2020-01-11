import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthState from './context/auth/AuthState';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <AuthState>
        <BrowserRouter>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </BrowserRouter>
      </AuthState>
    </div>
  );
}

export default App;
