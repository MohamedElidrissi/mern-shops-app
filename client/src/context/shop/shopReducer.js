import {
  FETCH_NEARBY_SHOPS_SUCCESS,
  FETCH_NEARBY_SHOPS_FAIL,
  REACTION_SUCCESS,
  REACTION_FAIL,
} from './shopActions';

export default (state, action) => {
  switch (action.type) {
    case FETCH_NEARBY_SHOPS_SUCCESS:
      return {
        nearbyShops: {
          data: [
            ...state.nearbyShops.data,
            ...action.payload.shops
          ],
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
    case FETCH_NEARBY_SHOPS_FAIL:
    case REACTION_FAIL:
    default:
      return state;
  }
};
