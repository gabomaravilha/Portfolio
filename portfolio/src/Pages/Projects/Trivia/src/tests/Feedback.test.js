import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import { screen } from '@testing-library/react';
import App from '../App';
import {
  INITIAL_STATE,
  CUSTOM_PLAYER_STATE_BELOW,
  CUSTOM_PLAYER_STATE_MEDIUM,
  CUSTOM_PLAYER_STATE_ABOVE,
} from '../data/player_data';

describe('Teste da tela de Feedback', () => {
  it('Verifica as informações do usuario na tela de feedback', () => {
    renderWithRouterAndRedux(<App />, {player: CUSTOM_PLAYER_STATE_BELOW}, '/feedback');
    const userImage = screen.getByRole('img',
      { src: 'https://www.gravatar.com/avatar/08a6480bc560da0c5e4d85c7e1faeb92'
    });
    const userName = screen.getByText('CUSTOM_PLAYER_STATE');
    const userScore = screen.getByTestId('feedback-total-score').textContent;
    expect(userName).toBeInTheDocument();
    expect(userImage).toBeInTheDocument();
    expect(userScore).toBe('70');
  })

  it(
    'Verifica a mensagem de feedback na tela quando menos de 3 perguntas são acertadas',
    () => {
      renderWithRouterAndRedux(<App />, {player: CUSTOM_PLAYER_STATE_BELOW}, '/feedback');
      const feedbackMessage = screen.getByTestId('feedback-text').textContent
      expect(feedbackMessage).toBe('Could be better...');
    },
  );
  

  it(
    'Verifica a mensagem de feedback na tela quando 3 perguntas são acertadas',
    () => {
      renderWithRouterAndRedux(<App />, {player: CUSTOM_PLAYER_STATE_MEDIUM}, '/feedback');
      const feedbackMessage = screen.getByTestId('feedback-text').textContent
      expect(feedbackMessage).toBe('Well Done!');
    },
  );
  

  it(
    'Verifica a mensagem de feedback na tela quando mais de 3 perguntas são acertadas',
    () => {
      renderWithRouterAndRedux(<App />, {player: CUSTOM_PLAYER_STATE_ABOVE}, '/feedback');
      const feedbackMessage = screen.getByTestId('feedback-text').textContent
      expect(feedbackMessage).toBe('Well Done!');
    },
  );
  

  it('Verifica as informações do player no estado global da aplicação', () => {
    const { store:
      { getState },
    } = renderWithRouterAndRedux(<App />, {player: CUSTOM_PLAYER_STATE_BELOW}, '/feedback');
    const { player: { assertions, score } } = getState();
    const scoreUser = screen.getByTestId('feedback-total-score').textContent
    const assertionsUser = screen.getByTestId('feedback-total-question').textContent;
    expect(assertionsUser).toBe(assertions.toString());
    expect(scoreUser).toBe(score.toString());
    expect(scoreUser).toBe('70');
    expect(assertionsUser).toBe('2');
  })

  it('Verifica se o botão jogar novamente leva pra pagina de login', () => {
    const {history} = renderWithRouterAndRedux(<App />, {player: INITIAL_STATE}, '/feedback');
    const playAgainButton = screen.getByTestId('btn-play-again');
    userEvent.click(playAgainButton);
    expect(history.location.pathname).toBe('/');
  })

  it('Verifica se o botão ranking leva para tela de ranking', () => {
    const {history} = renderWithRouterAndRedux(<App />, {player: INITIAL_STATE}, '/feedback');
    const rankingBtn = screen.getByTestId('btn-ranking');
    userEvent.click(rankingBtn);
    expect(history.location.pathname).toBe('/ranking');
  })
})