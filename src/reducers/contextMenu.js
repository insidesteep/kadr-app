import { SHOW_MODAL, HIDE_MODAL } from "../constants";
import produce from "immer";

const initialState = {
  modal: {
    isShow: false,
    optionType: null
  }
};

export default function contextMenuState(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          isShow: true,
          optionType: payload
        }
      };
    case HIDE_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          isShow: false,
          optionType: null
        }
      };
    default:
      return state;
  }
}
