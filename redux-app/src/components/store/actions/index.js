import axios from 'axios';



export const FETCHING_DOG_START = 'FETCHING_Dog_START';
export const FETCHING_DOG_SUCCESS = 'FETCHING_DOG_SUCCESS';
export const FETCHING_DOG_FAILURE = 'FETCHING_DOG_FAILURE';
export const getDog = () => dispatch => {
  dispatch({ type: FETCHING_DOG_START });
  axios
    .get('https://dog.ceo/api/breeds/image/random')
    .then(res => {  
      dispatch({ type: FETCHING_DOG_SUCCESS, payload: res.data.message });
    })    


        
    
    
    .catch(err => {
      dispatch({
        type: FETCHING_DOG_FAILURE,
        payload: `${err.response} `
      });
    });
};