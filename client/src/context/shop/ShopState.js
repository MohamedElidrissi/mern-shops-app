import React, { useReducer } from 'react';
import axios from 'axios';

import shopReducer from './shopReducer';
import ShopContext from './shopContext';
import {
  FETCH_NEARBY_SHOPS_SUCCESS,
  FETCH_NEARBY_SHOPS_FAIL,
} from './shopActions';

export default props => {
  const initialState = {
    nearbyShops: [],
  };

  const [state, dispatch] = useReducer(shopReducer, initialState);

  const fetchShops = async (long, lat, page = 1) => {
    try {
      const res = await axios.get(
        `/shops?page=${page}&long=${long}&lat=${lat}`
      );

      dispatch({
        type: FETCH_NEARBY_SHOPS_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({ type: FETCH_NEARBY_SHOPS_FAIL });
    }
  };

  return (
    <ShopContext.Provider
      value={{
        ...state,
        fetchShops,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
