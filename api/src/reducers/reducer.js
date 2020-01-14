import { FETCH_JOKES_SUCCESS, FETCH_JOKES_FAILURE, FETCH_JOKES_DATA } from "../actions/actions";

const initialState = {
    error: "",
    isFetching: false,
    data: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_JOKES_DATA:
            return {
                ...state,
                error: "",
                isFetching: true
                
            }
        case FETCH_JOKES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload

            }
        case FETCH_JOKES_FAILURE:
            return {
                ...state,
                error: action.payload
                
            }
        default:
            return state;
    }
}

export default reducer;