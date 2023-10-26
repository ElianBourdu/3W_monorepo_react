import {
  GET_FRUITS_REQUEST,
  GET_FRUITS_SUCCESS,
  GET_FRUITS_FAILURE,
} from '../actions/fruitsActions';

const initialState = {
  fruits: [],
  error: null,
};

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRUITS_REQUEST:
      return { ...state, error: null };
    case GET_FRUITS_SUCCESS:
      return { ...state, fruits: action.payload };
    case GET_FRUITS_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default fruitsReducer;