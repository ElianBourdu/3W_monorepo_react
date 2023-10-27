import { SET_SEARCH_RESULT } from '../actions/searchActions';

const initialState = {
  searchResult: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;