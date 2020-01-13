import {
  FETCH_INITIAL_NEARBY_SHOPS_SUCCESS,
  FETCH_NEXT_NEARBY_SHOPS_SUCCESS,
  FETCH_NEARBY_SHOPS_FAIL,
  REACTION_SUCCESS,
  REACTION_FAIL,
  FETCH_PREFERRED_SHOPS_FAIL,
  FETCH_PREFERRED_SHOPS_SUCCESS,
  GET_GEOLOCATION_SUCCESS,
  GET_GEOLOCATION_FAIL, UNLIKE_SHOP_FAIL, UNLIKE_SHOP_SUCCESS,
} from './shopActions';

export default (state, action) => {
  switch (action.type) {
    case FETCH_INITIAL_NEARBY_SHOPS_SUCCESS:
      return {
        ...state,
        nearbyShops: {
          data: action.payload.shops,
          hasMore: action.payload.hasMore
        }
      };
    case FETCH_NEXT_NEARBY_SHOPS_SUCCESS:
      return {
        ...state,
        nearbyShops: {
          data: state.nearbyShops.data.concat(action.payload.shops),
          hasMore: action.payload.hasMore
        }
      };
    case REACTION_SUCCESS:
      return {
        ...state,
        nearbyShops: {
          data: state.nearbyShops.data.filter(shop => shop._id !== action.payload),
          hasMore: state.nearbyShops.hasMore,
        }
      };
    case UNLIKE_SHOP_SUCCESS:
      return {
        ...state,
        preferredShops: state.preferredShops.filter(shop => shop._id !== action.payload),
      };
    case FETCH_PREFERRED_SHOPS_SUCCESS:
      return {
        ...state,
        preferredShops: action.payload.map(reaction => reaction.shop)
      };
    case GET_GEOLOCATION_SUCCESS:
      return {
        ...state,
        position: {
          long: action.payload.long,
          lat: action.payload.lat,
        }
      };
    case GET_GEOLOCATION_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_NEARBY_SHOPS_FAIL:
    case FETCH_PREFERRED_SHOPS_FAIL:
    case REACTION_FAIL:
    case UNLIKE_SHOP_FAIL:
    default:
      return state;
  }
};
