import { getTokenFromStorage } from '../../services/storage';
import { fetchQuestions } from '../../services/api';

// * Actions para lidar com o reducer do player
export const LOGIN = 'LOGIN';

export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

// * Actions para lidar com o reducer de questions
export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const QUESTIONS_RECEIVED_SUCCESS = 'QUESTIONS_RECEIVED_SUCCESS';
export const QUESTIONS_RECEIVED_FAILURE = 'QUESTIONS_RECEIVED_FAILURE';

export const requestQuestionsAction = () => ({
  type: REQUEST_QUESTIONS,
});

export const questionsReceivedSuccessAction = (payload) => ({
  type: QUESTIONS_RECEIVED_SUCCESS,
  payload,
});

export const questionsReceivedFailureAction = () => ({
  type: QUESTIONS_RECEIVED_FAILURE,
});

export const fetchQuestionsAction = () => async (dispatch) => {
  dispatch(requestQuestionsAction());
  try {
    const token = getTokenFromStorage();
    const amount = 5;
    const questions = await fetchQuestions(token, amount);
    dispatch(questionsReceivedSuccessAction(questions));
  } catch (error) {
    dispatch(questionsReceivedFailureAction());
  }
};

export const UPDATE_ASSERTIONS = 'UPDATE_ASSERTIONS';

export const updateAssertions = (payload) => ({
  type: UPDATE_ASSERTIONS,
  payload,
});

export const updateScore = (value) => ({
  type: 'UPDATE_SCORE',
  payload: value,
});

export const TOGGLE_TIMER = 'TOGGLE_TIMER';

export const toggleTimerAction = () => ({
  type: TOGGLE_TIMER,
});

export const RESET_TIMER = 'RESET_TIMER';

export const resetTimerAction = () => ({
  type: RESET_TIMER,
});

export const RESET_PLAYER = 'RESET_PLAYER';

export const resetPlayerAction = () => ({
  type: RESET_PLAYER,
});
