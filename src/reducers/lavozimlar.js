import { FETCH_LAVOZIMLAR_START, FETCH_LAVOZIMLAR_SUCCESS, FETCH_LAVOZIMLAR_FAILURE } from "../constants";

const initialState = {
    data: [],
    loading: false,
    error: null
};

const LavozimlarState = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_LAVOZIMLAR_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_LAVOZIMLAR_SUCCESS:
            return {
                ...state,
                data: payload,
                loading: false
            };
        case FETCH_LAVOZIMLAR_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            };
        default:
            return state;
    }
};

export default LavozimlarState;
