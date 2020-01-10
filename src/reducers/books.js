import {
  GET_SEARCH_BOOKS_SUCCESS,
  GET_SEARCH_BOOKS_FAILURE,
  OPEN_FAVORITE_MODAL,
  CLOSE_FAVORITE_MODAL,
  GET_BOOKS_START,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE,
  ADD_BOOK_START,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  ADD_BOOK_TO_FAVORITE_START,
  ADD_BOOK_TO_FAVORITE_SUCCESS,
  ADD_BOOK_TO_FAVORITE_FAILURE,
  SELECT_BOOK,
  SET_UPLOAD_PROGRESS,
  GET_SEARCH_BOOKS_START
} from "../constants";

const initialState = {
  data: [],
  searchData: [],
  selectedBook: {},
  isFavoriteModal: false,
  loading: false,
  uploadProgress: null
};

export default function booksState(state = initialState, action) {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case GET_BOOKS_START:
      return {
        ...state,
        loading: true
      };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false
      };
    case GET_BOOKS_FAILURE:
      return {
        ...state,
        loading: false
      };
    case ADD_BOOK_START:
      return {
        ...state,
        loading: true
      };
    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: state.data.length++,
            ...payload
          }
        ],
        loading: false
      };
    case ADD_BOOK_FAILURE:
      return {
        ...state,
        loading: false
      };
    case GET_SEARCH_BOOKS_START:
      return {
        ...state,
        searchData: []
      };

    case GET_SEARCH_BOOKS_SUCCESS:
      return {
        ...state,
        searchData: payload
      };

    case ADD_BOOK_TO_FAVORITE_START:
      return {
        ...state,
        loading: true
      };
    case ADD_BOOK_TO_FAVORITE_SUCCESS:
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: state.data.length++,
            ...payload
          }
        ],
        loading: false,
        isFavoriteModal: false
      };
    case ADD_BOOK_TO_FAVORITE_FAILURE:
      return {
        ...state,
        loading: false,
        isFavoriteModal: false
      };
    case OPEN_FAVORITE_MODAL:
      return {
        ...state,
        isFavoriteModal: payload
      };
    case SELECT_BOOK:
      console.log(payload);
      return {
        ...state,
        selectedBook: payload
      };
    case CLOSE_FAVORITE_MODAL:
      return {
        ...state,
        isFavoriteModal: payload
      };
    case SET_UPLOAD_PROGRESS:
      return {
        ...state,
        uploadProgress: payload
      };
    default:
      return state;
  }
}
