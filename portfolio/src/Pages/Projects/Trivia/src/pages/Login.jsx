import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import md5 from 'crypto-js/md5';
import { fetchToken } from '../services/api';
import { saveTokenOnStorage } from '../services/storage';
import { loginAction } from '../redux/actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      isButtonDisabled: true,
      loading: false,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.verifyInputs());
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { history } = this.props;
    this.setState({ loading: true });
    this.savePlayerInfo();
    this.setState({ loading: false });
    history.push('/game');
  };

  // * Código adicionado para salvar o nome do jogador e o email do gravatar
  savePlayerInfo = async () => {
    const { token } = await fetchToken();
    const { name, email } = this.state;
    const { dispatch } = this.props;

    const hash = md5(email).toString();
    const gravatarIMG = `https://www.gravatar.com/avatar/${hash}`;

    const player = {
      name,
      gravatarEmail: email,
      token,
      gravatarIMG,
      score: 0,
      assertions: 0,
    };

    saveTokenOnStorage(token);
    dispatch(loginAction(player));
  };

  verifyInputs = () => {
    const { email, name } = this.state;

    const errors = [
      !email || !email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
      !name.trim(),
    ];

    const hasErrors = errors.some((error) => error);
    this.setState({
      isButtonDisabled: hasErrors,
    });
  };

  render() {
    const { name, email, isButtonDisabled, loading } = this.state;
    return (
      <>
        <form>
          <input
            type="text"
            name="name"
            data-testid="input-player-name"
            onChange={ this.handleChange }
            value={ name }
            placeholder="Player name"
          />
          <input
            type="email"
            name="email"
            data-testid="input-gravatar-email"
            onChange={ this.handleChange }
            value={ email }
            placeholder="Email"
          />
          <button
            type="submit"
            data-testid="btn-play"
            disabled={ isButtonDisabled }
            onClick={ this.handleSubmit }
          >
            Play
          </button>
          {loading && <div>Loading...</div>}
        </form>
        <Link to="/settings" data-testid="btn-settings">
          Settings
        </Link>
      </>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  dispatch: PropTypes.func.isRequired,
};

Login.defaultProps = {
  history: {},
};

export default connect()(Login);
