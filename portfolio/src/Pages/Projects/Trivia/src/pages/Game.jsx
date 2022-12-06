import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Questions from '../components/Questions';
import { fetchQuestionsAction } from '../redux/actions';

const FETCH_ERROR = 3;

function Game() {
  const dispatch = useDispatch();
  const { response_code: responseCode } = useSelector(
    (globalState) => globalState.game.questions,
  );

  useEffect(() => {
    dispatch(fetchQuestionsAction());
  }, [dispatch]);

  if (responseCode === FETCH_ERROR) {
    localStorage.removeItem('token');
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header />
      <Questions />
    </>
  );
}

export default Game;
