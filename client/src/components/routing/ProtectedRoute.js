import React, { useContext, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';

function ProtectedRoute(props) {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  return (
    <Fragment>
      {isAuthenticated || isLoading ? (
        <Route {...props} />
      ) : (
        <Redirect to="/signin" />
      )}
    </Fragment>
  );
}

export default ProtectedRoute;
