import { SET_SEARCH_QUERY, SET_NEXT_ELEMENTS, SET_LIMIT, SET_PREV_ELEMENTS } from '../constants'

const initialState = {
    searchQuery: '',
    limit: 5,
    limitSize: 5,
    offset: 0
}

export default function filterState( state = initialState, action ){
    const { type, payload } = action
    console.log(type)
    switch(type){
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: payload
            }
        case SET_LIMIT:
            return {
                ...state,
                limitSize: payload,
                limit: payload,
                offset: 0
            }
        case SET_NEXT_ELEMENTS:
            const { limit, limitSize } = state
            return {
                ...state,
                limit: limit + limitSize,
                offset: limit
            }
        case SET_PREV_ELEMENTS:

            return {
                ...state,
                limit: state.limit - state.limitSize,
                offset: state.offset - state.limitSize
            }
        default:
            return state
    }
}
