import React, { useReducer } from 'react';
import axios from 'axios';
import parse from 'parse-link-header';

import shopReducer from './shopReducer';
import ShopContext from './shopContext';
import {
  FETCH_NEARBY_SHOPS_SUCCESS,
  FETCH_NEARBY_SHOPS_FAIL,
  REACTION_SUCCESS,
  REACTION_FAIL, FETCH_PREFERRED_SHOPS_FAIL, FETCH_PREFERRED_SHOPS_SUCCESS,
} from './shopActions';

export default props => {
  const initialState = {
    nearbyShops: {
      data: [],
      hasMore: false,
      nextPage: null
    },
    preferredShops: []
  };

  const [state, dispatch] = useReducer(shopReducer, initialState);

  const fetchShops = async (long, lat, page = 1) => {
    try {
      const res = await axios.get(
        `/shops?page=${page}&long=${long}&lat=${lat}`
      );

      const links = parse(res.headers.link);

      dispatch({
        type: FETCH_NEARBY_SHOPS_SUCCESS,
        payload: {
          shops: res.data,
          hasMore: !!links.next
        },
      });
    } catch (err) {
      dispatch({ type: FETCH_NEARBY_SHOPS_FAIL });
    }
  };

  const fetchPreferredShops = async () => {
    try {
      const res = await axios.get('/reactions?type=like');

      dispatch({
        type: FETCH_PREFERRED_SHOPS_SUCCESS,
        payload: res.data
      })
    } catch (err) {
      dispatch({ type: FETCH_PREFERRED_SHOPS_FAIL })
    }
  };

  // no pun intended
  const react = async (shopId, type) => {
    try {
      await axios.post('/reactions', { shopId, type }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      dispatch({
        type: REACTION_SUCCESS,
        payload: shopId,
      });
    } catch (err) {
      dispatch({ type: REACTION_FAIL });
    }
  };

  return (
    <ShopContext.Provider
      value={{
        ...state,
        fetchShops,
        fetchPreferredShops,
        react,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
