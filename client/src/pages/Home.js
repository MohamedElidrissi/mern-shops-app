import React, { useContext, useEffect } from 'react';

import AuthContext from '../context/auth/authContext';

function Home() {
  const { fetchUser } = useContext(AuthContext);

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
