import axios from "axios";

export const FETCH_JOKES_SUCCESS = "FETCH_JOKES_SUCCESS";
export const FETCH_JOKES_FAILURE = "FETCH_JOKES_FAILURE";
export const FETCH_JOKES_DATA = "FETCH_JOKES_DATA";

export const getJokes = () => {
    return dispatch => {
        dispatch({ type: FETCH_JOKES_DATA })
        axios  
            .get("https://official-joke-api.appspot.com/random_ten")
            .then (res => {
                console.log(res);
                dispatch({ type: FETCH_JOKES_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: FETCH_JOKES_FAILURE, payload: err })
            
            })
        }
}