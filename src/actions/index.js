import {
  SET_MINIMIZE_MENU,
  SET_HOVER_STATE,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_DATA_FOR_MODAL,
  PASSPORT_DATA_LOADED,
  SET_SEARCH_QUERY,
  SET_NEXT_ELEMENTS,
  SET_LIMIT,
  SET_PREV_ELEMENTS,
  GET_SEARCH_BOOKS_START,
  GET_SEARCH_BOOKS_SUCCESS,
  GET_SEARCH_BOOKS_FAILURE,
  OPEN_FAVORITE_MODAL,
  CLOSE_FAVORITE_MODAL,
  ADD_BOOK_TO_FAVORITE_START,
  ADD_BOOK_TO_FAVORITE_SUCCESS,
  ADD_BOOK_TO_FAVORITE_FAILURE,
  SELECT_BOOK,
  ADD_BOOK_START,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  SET_UPLOAD_PROGRESS,
  SHOW_MODAL,
  HIDE_MODAL,
  CREATE_BULIM,
  FETCH_BULIMLAR_START,
  FETCH_BULIMLAR_SUCCESS,
  FETCH_BULIMLAR_FAILURE,
  FETCH_LAVOZIMLAR_START,
  FETCH_LAVOZIMLAR_SUCCESS,
  FETCH_LAVOZIMLAR_FAILURE,
  CREATE_NEW_XODIM_START,
  CREATE_NEW_XODIM_SUCCESS,
  CREATE_NEW_XODIM_FAILURE,
  ADD_XODIM_START,
  ADD_XODIM_SUCCESS,
  ADD_XODIM_FAILURE
} from "../constants";

import axios from "axios";

export function setMinimizeMenu(isMinimize) {
  return {
    type: SET_MINIMIZE_MENU,
    payload: {
      isMinimize
    }
  };
}

export function setHoverState(isHovered) {
  return {
    type: SET_HOVER_STATE,
    payload: {
      isHovered
    }
  };
}

export function openModal() {
  return {
    type: OPEN_MODAL
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}

export function setDataForModal(data) {
  return {
    type: SET_DATA_FOR_MODAL,
    payload: data
  };
}

/*PASSPORT ACTIONS*/

export function passportDataLoaded(newData) {
  return {
    type: PASSPORT_DATA_LOADED,
    payload: newData
  };
}

/* FITLER ACTIONS */

export function setSearchQuery(query) {
  return {
    type: SET_SEARCH_QUERY,
    payload: query
  };
}

export function setLimit(limit) {
  return {
    type: SET_LIMIT,
    payload: limit
  };
}

export function setNextElements() {
  return {
    type: SET_NEXT_ELEMENTS
  };
}
export function setPrevElements() {
  return {
    type: SET_PREV_ELEMENTS
  };
}

export function getSearchBooks(term) {
  return dispatch => {
    console.log(term);
    dispatch({
      type: GET_SEARCH_BOOKS_START
    });

    fetch("http://med.bsmi.uz/kitob/book_search.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: term
      })
    })
      .then(response => response.json())
      .then(result => {
        dispatch({
          type: GET_SEARCH_BOOKS_SUCCESS,
          payload: result
        });
      })
      .catch(error => {
        dispatch({
          type: GET_SEARCH_BOOKS_FAILURE
        });
      });
  };
}

export function selectBook(book) {
  return {
    type: SELECT_BOOK,
    payload: book
  };
}

export function openFavoriteModal(bool, book) {
  return dispatch => {
    dispatch(selectBook(book));
    dispatch({
      type: OPEN_FAVORITE_MODAL,
      payload: bool
    });
  };
}

export function closeFavoriteModal(bool) {
  return {
    type: CLOSE_FAVORITE_MODAL,
    payload: bool
  };
}

export function setUploadProgress(percent) {
  return {
    type: SET_UPLOAD_PROGRESS,
    payload: percent
  };
}

export function addBook(book) {
  return dispatch => {
    const config = {
      onUploadProgress: function(progressEvent) {
        const percent = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        dispatch(setUploadProgress(percent));
      }
    };

    dispatch({
      type: ADD_BOOK_START
    });
    axios
      .post("file_upload_parser.php", book, config)
      .then(function(res) {
        dispatch({
          type: ADD_BOOK_SUCCESS
        });
        console.log("SEND");
      })
      .catch(function(err) {
        dispatch({
          type: ADD_BOOK_FAILURE
        });
        console.log("ERROR");
      });
  };
}

export function addBookToFavorite(userId, book) {
  return dispatch => {
    dispatch({
      type: ADD_BOOK_TO_FAVORITE_START
    });

    fetch("http://www.mocky.io/v2/5da429e72f00002a008a09c5", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        userId,
        book
      }
    })
      .then(response => response.json())
      .then(result => {
        dispatch({
          type: ADD_BOOK_TO_FAVORITE_SUCCESS,
          payload: book
        });
      })
      .catch(error => {
        dispatch({
          type: ADD_BOOK_TO_FAVORITE_FAILURE
        });
      });
  };
}

export function showModal(optionType) {
  return {
    type: SHOW_MODAL,
    payload: optionType
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  };
}

let id = 562;

export function fetchBulimlar() {
  return dispatch => {
    dispatch({
      type: FETCH_BULIMLAR_START
    });
    axios
      .get("file_upload_parser.php")
      .then(function(res) {
        dispatch({
          type: FETCH_BULIMLAR_SUCCESS
        });
        console.log("SEND");
      })
      .catch(function(err) {
        dispatch({
          type: FETCH_BULIMLAR_FAILURE
        });
        console.log("ERROR");
      });
  };
}

export function fetchLavozimlar() {
  return dispatch => {
    dispatch({
      type: FETCH_LAVOZIMLAR_START
    });
    axios
      .get("file_upload_parser.php")
      .then(function(res) {
        dispatch({
          type: FETCH_LAVOZIMLAR_SUCCESS
        });
        console.log("SEND");
      })
      .catch(function(err) {
        dispatch({
          type: FETCH_LAVOZIMLAR_FAILURE
        });
        console.log("ERROR");
      });
  };
}

export function createBulim(data) {
  console.log("data", data);
  return {
    type: CREATE_BULIM,
    payload: {
      key: id++,
      name: data.name,
      shtat: data.shtat,
      children: null
    }
  };
}

export function createInlineBulim(bulim, inlineBulim) {
  return {
    type: CREATE_BULIM,
    payload: {
      bulim,
      inlineBulim
    }
  };
}

/****************************************************************************************/
/********************************** XODIMLAR ACTIONS ************************************/
/****************************************************************************************/

export function createNewXodim(data) {
  return dispatch => {
    dispatch({
      type: CREATE_NEW_XODIM_START
    });
    axios
      .post("http://")
      .then(function(res) {
        dispatch({
          type: CREATE_NEW_XODIM_SUCCESS,
          payload: {
            data
          }
        });
        console.log("SEND");
      })
      .catch(function(error) {
        dispatch({
          type: CREATE_NEW_XODIM_FAILURE,
          payload: {
            error
          }
        });
        console.log("ERROR");
      });
  };
}

export function addXodim(data) {
  return dispatch => {
    dispatch({
      type: ADD_XODIM_START
    });
    axios
      .post("http://")
      .then(function(res) {
        dispatch({
          type: ADD_XODIM_SUCCESS,
          payload: {
            data
          }
        });
        console.log("SEND");
      })
      .catch(function(error) {
        dispatch({
          type: ADD_XODIM_FAILURE,
          payload: {
            error
          }
        });
        console.log("ERROR");
      });
  };
}
