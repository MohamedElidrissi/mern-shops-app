import React, { useReducer } from 'react';
import axios from 'axios';
import parse from 'parse-link-header';

import shopReducer from './shopReducer';
import ShopContext from './shopContext';
import {
  FETCH_INITIAL_NEARBY_SHOPS_SUCCESS,
  FETCH_NEXT_NEARBY_SHOPS_SUCCESS,
  FETCH_NEARBY_SHOPS_FAIL,
  REACTION_SUCCESS,
  REACTION_FAIL,
  UNLIKE_SHOP_SUCCESS,
  UNLIKE_SHOP_FAIL,
  FETCH_PREFERRED_SHOPS_FAIL,
  FETCH_PREFERRED_SHOPS_SUCCESS,
  GET_GEOLOCATION_SUCCESS,
  GET_GEOLOCATION_FAIL,
} from './shopActions';

export default props => {
  const initialState = {
    nearbyShops: {
      data: [],
      hasMore: false,
    },
    preferredShops: [],
    position: {
      long: 0,
      lat: 0,
    },
    error: null,
  };

  const [state, dispatch] = useReducer(shopReducer, initialState);

  const obtainGeolocation = () => {
    const { geolocation } = window.navigator;

    async function onSuccess({ coords }) {
      dispatch({
        type: GET_GEOLOCATION_SUCCESS,
        payload: {
          long: coords.longitude,
          lat: coords.latitude,
        }
      });

      await fetchInitialNearbyShops(coords.longitude, coords.latitude);
    }

    function onError(positionError) {
      let message;

      if (positionError.code === positionError.PERMISSION_DENIED) {
          message = 'Please allow location permission in your browser to see your nearby shops.';
      } else {
          message = positionError.message;
      }

      dispatch({
        type: GET_GEOLOCATION_FAIL,
        payload: message,
      });
    }

    geolocation.getCurrentPosition(onSuccess, onError);
  };

  const fetchInitialNearbyShops = async (long, lat) => {
    try {
      const res = await axios.get(
        `/shops?long=${long}&lat=${lat}`
      );

      const links = parse(res.headers.link);

      dispatch({
        type: FETCH_INITIAL_NEARBY_SHOPS_SUCCESS,
        payload: {
          shops: res.data,
          hasMore: !!links.next,
        },
      });
    } catch (err) {
      dispatch({ type: FETCH_NEARBY_SHOPS_FAIL });
    }
  };

  const fetchNextNearbyShops = async (long, lat, page) => {
    try {
      const res = await axios.get(
        `/shops?page=${page}&long=${long}&lat=${lat}`
      );

      const links = parse(res.headers.link);

      dispatch({
        type: FETCH_NEXT_NEARBY_SHOPS_SUCCESS,
        payload: {
          shops: res.data,
          hasMore: !!links.next,
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

  const unlikeShop = async shopId => {
    try {
      await axios.delete('/reactions', {
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          shopId
        }
      });

      dispatch({
        type: UNLIKE_SHOP_SUCCESS,
        payload: shopId,
      });
    } catch (err) {
      dispatch({ type: UNLIKE_SHOP_FAIL });
    }
  };

  return (
    <ShopContext.Provider
      value={{
        ...state,
        obtainGeolocation,
        fetchNextNearbyShops,
        fetchPreferredShops,
        react,
        unlikeShop,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
