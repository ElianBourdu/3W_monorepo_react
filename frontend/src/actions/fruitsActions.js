import axios from 'axios';

export const GET_FRUITS_REQUEST = 'GET_FRUITS_REQUEST';
export const GET_FRUITS_SUCCESS = 'GET_FRUITS_SUCCESS';
export const GET_FRUITS_FAILURE = 'GET_FRUITS_FAILURE';

export const GET_FRUITS = () => {
  return (dispatch) => {
    dispatch({ type: GET_FRUITS_REQUEST });
    const data = axios.get('http://localhost:8000/fruits')
      .then((response) => {
        dispatch({ type: GET_FRUITS_SUCCESS, payload: response.data });
        console.log(response)
      })
      .catch((error) => {
        dispatch({ type: GET_FRUITS_FAILURE, error: error.message });
        console.log(error.message)
      });
  };
};
