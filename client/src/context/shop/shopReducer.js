import {
  FETCH_NEARBY_SHOPS_SUCCESS,
  FETCH_NEARBY_SHOPS_FAIL,
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
    case FETCH_NEARBY_SHOPS_FAIL:
    default:
      return state;
  }
};
