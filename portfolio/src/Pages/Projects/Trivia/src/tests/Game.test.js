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
} from './helpers/player_data';
import { responseValid, responseInvalid } from './mocks/token';

describe('Teste da tela de Jogo', () => {
  it('Verifica as informações do usuario na tela de Jogo', () => {
    renderWithRouterAndRedux(<App />, {player: INITIAL_STATE}, '/game');
    const userImage = screen.getByTestId('header-profile-picture')
    const userName = screen.getByTestId('header-player-name');
    const userScore = screen.getByTestId('header-score');
    expect(userName).toBeInTheDocument();
    expect(userName).toHaveTextContent(INITIAL_STATE.name);
    expect(userImage).toBeInTheDocument();
    expect(userImage).toHaveAttribute('src', INITIAL_STATE.gravatarIMG);
    expect(userScore).toBeInTheDocument();
    expect(userScore).toHaveTextContent('0');
  })
  it('Verifica se é redirecionado para home se o Token é incorreto', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(responseInvalid)
    });
    
    const { history } = renderWithRouterAndRedux(<App />, {player: INITIAL_STATE } , '/game');
    const button = await screen.findByTestId('btn-play');
    const { location: { pathname } } = history;
    expect(button).toBeInTheDocument();
    expect(pathname).toBe('/');
    }); 
  it('Verifica se volta para pagina inicial quando local storage não tem a chave token', async () => {
    localStorage.removeItem('token')
    const { history } = renderWithRouterAndRedux(<App />, {player: INITIAL_STATE}, '/game');
    const button = await screen.findByTestId('btn-play');
    const { location: { pathname } } = history;
    expect(button).toBeInTheDocument();
    expect(pathname).toBe('/');
  });
  it('Verifica se é redirecionado para tela de game quando o token ta correto', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(responseValid)
      });
    const { history, debug } = renderWithRouterAndRedux(<App />, {player: INITIAL_STATE } , '/game');
    const firstQuestion = await screen.findByText('American rapper Dr. Dre actually has a Ph.D. doctorate.');
    expect(firstQuestion).toBeInTheDocument();
    const wrongAnswer = await screen.findByText('True');
    expect(wrongAnswer).toBeInTheDocument();
    const rightAnswer = await screen.findByText('False');
    expect(rightAnswer).toBeInTheDocument();
  });
});
