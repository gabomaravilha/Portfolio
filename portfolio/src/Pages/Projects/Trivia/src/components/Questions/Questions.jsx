import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toggleTimerAction } from '../../redux/actions';
import Question from './Question/Question';
import Timer from '../Timer';

function Questions() {
  const [index, nextIndex] = useState(0);
  const { results: questions } = useSelector((globalState) => globalState.game.questions);
  const isTimeRunning = useSelector((globalState) => globalState.game.isTimeRunning);
  const dispatch = useDispatch();
  const history = useHistory();

  function renderQuestion() {
    if (!questions) return null;
    const question = questions[index];
    return <Question { ...question } />;
  }

  function handleClick() {
    if (index === questions.length - 1) {
      history.push('/feedback');
    }
    nextIndex(index + 1);
    dispatch(toggleTimerAction());
  }

  return (
    <div>
      <Timer />
      {renderQuestion()}
      {!isTimeRunning && (
        <button type="button" data-testid="btn-next" onClick={ handleClick }>
          Next
        </button>
      )}
    </div>
  );
}

export default Questions;
