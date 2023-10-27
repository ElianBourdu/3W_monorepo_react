export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';

export const setSearchResult = (result) => {
  return {
    type: SET_SEARCH_RESULT,
    payload: result,
  };
};