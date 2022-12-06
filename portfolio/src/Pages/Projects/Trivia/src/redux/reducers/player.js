import { LOGIN, UPDATE_ASSERTIONS, RESET_PLAYER } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  gravatarIMG: '',
  token: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      ...action.payload,
    };
  case UPDATE_ASSERTIONS:
    return {
      ...state,
      assertions: state.assertions + action.payload.assertions,
      score: state.score + action.payload.score,
    };
  case RESET_PLAYER:
    return {
      ...state,
      name: '',
      assertions: 0,
      score: 0,
      gravatarEmail: '',
      gravatarIMG: '',
      token: '',
    };
  default:
    return state;
  }
};

export default player;
