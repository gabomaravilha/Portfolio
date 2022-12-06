import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import { screen } from '@testing-library/react';
import App from '../App';
import { INITIAL_STATE, CUSTOM_PLAYER_STATE_BELOW } from './helpers/player_data';

describe('Teste da tela de Ranking', () => {
  it('Verifica se existe um botão com o data-id correto e se esse botao leva pra home', () => {
    const { history } = renderWithRouterAndRedux(<App />, {player: INITIAL_STATE}, '/ranking');
    const button = screen.getByTestId('btn-go-home');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    const { pathname } = history.location;
    expect(pathname).toBe('/')
  });

  it('Verifica as informações do usuario na tela de ranking', () => {
    renderWithRouterAndRedux(<App />, {player: CUSTOM_PLAYER_STATE_BELOW}, '/feedback');
    const button = screen.getByRole('button', { name: /ranking/i});
    userEvent.click(button);
    const userImage = screen.getByRole('img',
      { src: 'https://www.gravatar.com/avatar/08a6480bc560da0c5e4d85c7e1faeb92'
    });
    const userName = screen.getByText('CUSTOM_PLAYER_STATE');
    const userScore = screen.getByText('70');
    expect(userName).toBeInTheDocument();
    expect(userImage).toBeInTheDocument();
    expect(userScore).toBeInTheDocument();
  });

  it('Salva o ranking no local storage', () => {
    const setItem = jest.spyOn(Storage.prototype, 'setItem');
    renderWithRouterAndRedux(<App />, {player: INITIAL_STATE}, '/feedback');
    const button = screen.getByRole('button', { name: /ranking/i});
    userEvent.click(button);
    expect(setItem).toHaveBeenCalled();
  });
})
