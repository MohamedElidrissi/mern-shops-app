import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import AuthState from './context/auth/AuthState';
import ShopState from './context/shop/ShopState';
import ProtectedRoute from './components/routing/ProtectedRoute';
import Header from './components/layout/Header';
import NearbyShopsList from './components/NearbyShopsList';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <AuthState>
        <ShopState>
          <BrowserRouter>
            <Switch>
              <Redirect exact from="/" to="/nearby"/>
              <ProtectedRoute
                path="/nearby"
                render={() => (
                  <Fragment>
                    <Header/>
                    <NearbyShopsList/>
                  </Fragment>
                )}
              />
              <Route path="/signup" component={SignUp}/>
              <Route path="/signin" component={SignIn}/>
            </Switch>
          </BrowserRouter>
        </ShopState>
      </AuthState>
    </div>
  );
}

export default App;
