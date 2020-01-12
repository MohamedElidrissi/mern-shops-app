import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import AuthState from './context/auth/AuthState';
import ProtectedRoute from './components/routing/ProtectedRoute';
import Header from './components/layout/Header';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <AuthState>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/nearby" />
            <ProtectedRoute
              path="/nearby"
              render={() => (
                <Fragment>
                  <Header />
                  <h1>Nearby Shops</h1>
                </Fragment>
              )}
            />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </BrowserRouter>
      </AuthState>
    </div>
  );
}

export default App;
