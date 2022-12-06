import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Question.module.scss';
import { toggleTimerAction, updateAssertions } from '../../../redux/actions';

const SORT = 0.5;
const CORRECT = 'correct-answer';
const BASE_SCORE = 10;
const LEVEL = {
  easy: 1,
  medium: 2,
  hard: 3,
};

function Question({
  category,
  question,
  difficulty,
  correct_answer: correctAnswer,
  incorrect_answers: incorrectAnswers,
}) {
  const isTimeRunning = useSelector((globalState) => globalState.game.isTimeRunning);
  const dispatch = useDispatch();

  // * Guarda o valor para ser sorteado apenas na primeira renderização. Assim não é sorteado novamente quando o componente é reenderizado.
  const answers = useMemo(
    () => [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - SORT),
    [correctAnswer, incorrectAnswers],
  );

  useEffect(() => {
    if (isTimeRunning) return;
    const answersOptions = document.querySelectorAll('.option');
    answersOptions.forEach((answer) => {
      if (answer.id === CORRECT) answer.classList.add(styles.correct__answer);
      else answer.classList.add(styles.wrong__answer);
    });
  }, [isTimeRunning]);

  function calculateScore(answer) {
    if (answer !== CORRECT) return;
    const time = document.querySelector('#Timer').textContent;
    const score = BASE_SCORE + time * LEVEL[difficulty];
    dispatch(updateAssertions({ score, assertions: 1 }));
  }

  function handleClick({ target }) {
    const choosenAnswer = target.id;
    dispatch(toggleTimerAction());
    calculateScore(choosenAnswer);
  }

  function renderAnwers() {
    return answers.map((answer) => (
      <button
        disabled={ !isTimeRunning }
        onClick={ handleClick }
        className="option"
        key={ answer }
        type="button"
        data-testid={
          answer === correctAnswer
            ? CORRECT
            : `wrong-answer-${incorrectAnswers.indexOf(answer)}`
        }
        id={
          answer === correctAnswer
            ? CORRECT
            : `wrong-answer-${incorrectAnswers.indexOf(answer)}`
        }
      >
        {answer}
      </button>
    ));
  }

  return (
    <div>
      <h1 data-testid="question-text">{question}</h1>
      <h2 data-testid="question-category">{category}</h2>
      <div data-testid="answer-options">{renderAnwers()}</div>
    </div>
  );
}

Question.propTypes = {
  category: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  correct_answer: PropTypes.string.isRequired,
  incorrect_answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  difficulty: PropTypes.string.isRequired,
};

export default Question;
