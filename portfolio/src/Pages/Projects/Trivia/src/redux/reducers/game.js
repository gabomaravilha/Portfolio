import {
  QUESTIONS_RECEIVED_SUCCESS,
  QUESTIONS_RECEIVED_FAILURE,
  REQUEST_QUESTIONS,
  TOGGLE_TIMER,
  RESET_TIMER,
} from '../actions';

const INITIAL_STATE = {
  questions: [],
  isFetching: false,
  error: false,
  isTimeRunning: true,
  initial_time: 30,
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_QUESTIONS:
    return {
      ...state,
      isFetching: true,
    };
  case QUESTIONS_RECEIVED_SUCCESS:
    return {
      ...state,
      isFetching: false,
      questions: action.payload,
    };
  case QUESTIONS_RECEIVED_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: true,
    };
  case TOGGLE_TIMER:
    return {
      ...state,
      isTimeRunning: !state.isTimeRunning,
    };
  case RESET_TIMER:
    return {
      ...state,
      initial_time: 30,
    };
  default:
    return state;
  }
};

export default game;
