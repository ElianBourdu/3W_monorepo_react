import Axios from 'axios';

export const GET_FRUITS_REQUEST = 'GET_FRUITS_REQUEST';
export const GET_FRUITS_SUCCESS = 'GET_FRUITS_SUCCESS';
export const GET_FRUITS_FAILURE = 'GET_FRUITS_FAILURE';

export const GET_FRUITS = () => {
  return (dispatch) => {
    dispatch({ type: GET_FRUITS_REQUEST });
    Axios.get('/fruits')
      .then((response) => {
        dispatch({ type: GET_FRUITS_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: GET_FRUITS_FAILURE, error: error.message });
      });
  };
};
