import {
  GET_MESSAGES_FAIL,
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  POST_MESSAGES_FAIL,
  POST_MESSAGES_REQUEST,
  POST_MESSAGES_SUCCESS,
} from "../Constants/Messageconstants";

export const GetMessagesReducer = (
  state = { Messages: [], Posted: {} },
  action
) => {
  switch (action.type) {
    case GET_MESSAGES_REQUEST:
      return { ...state, loading: true, error: "" };
    case GET_MESSAGES_SUCCESS:
      return { ...state, Messages: action.payload, loading: false, error: "" };
    case GET_MESSAGES_FAIL:
      return { ...state, loading: false, error: action.payload };
    case POST_MESSAGES_SUCCESS:
      return { ...state, loading: false, Posted: action.payload, error: "" };
    case POST_MESSAGES_REQUEST:
      return { ...state, loading: true, error: "" };
    case POST_MESSAGES_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
