import { SET_MINIMIZE_MENU, SET_HOVER_STATE, OPEN_MODAL, CLOSE_MODAL, SET_DATA_FOR_MODAL, PASSPORT_DATA_LOADED } from '../constants'
import { combineReducers } from 'redux'
import { users } from '../allData'
import filter from './filter'
import books from './books'
import contextMenu from './contextMenu'
import bulimlar from './bulimlar'

const initialState = {
    isMinimize: false,
    isHovered: false,
}

function menuMinimize( state = initialState, action ){
    const { type, payload } = action
    
    switch(type){
        case SET_MINIMIZE_MENU:
            return {
                ...state,
                ...payload
            }
        case SET_HOVER_STATE:
            return {
                ...state,
                ...payload
            }
            
        default:
            return state    
    }
}

const initialModalState = {
    isOpenModal: false,
    data: [],
    dataForModal: []
}

function modalState( state = initialModalState, action ){
    const { type, payload } = action

    switch(type){
        case OPEN_MODAL:
            return{
                ...state,
                isOpenModal: true
            }
        case CLOSE_MODAL:
            return{
                ...state,
                isOpenModal: false
            }
        case SET_DATA_FOR_MODAL:
            return{
                ...state,
                dataForModal: payload
            }
        
        default:
            return state
    }
}

const initialPassportState = {
    data: [],
    isLoading: true
}

function passportState( state = initialPassportState, action ){
    const { type, payload } = action

    switch(type){
        case PASSPORT_DATA_LOADED:
            return {
                data: payload,
                isLoading: false
            }
        
        default:
            return state
    }
}



const bsmi_app = combineReducers({
    menuMinimize,
    modalState,
    passportState,
    filter,
    books,
    contextMenu,
    bulimlar
})

export default bsmi_app