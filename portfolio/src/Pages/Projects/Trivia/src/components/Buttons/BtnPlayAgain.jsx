import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { resetPlayerAction } from '../../redux/actions';

class BtnPlayAgain extends React.Component {
  resetGame = () => {
    const { dispatch } = this.props;
    dispatch(resetPlayerAction());
  }

  render() {
    return (
      <Link to="/">
        <button
          onClick={ this.resetGame }
          type="button"
          data-testid="btn-play-again"
        >
          Play Again
        </button>
      </Link>
    );
  }
}
const mapStateToProps = (state) => ({
  player: state.player,
});
BtnPlayAgain.propTypes = {
  dispatch: propTypes.func.isRequired,
};
export default connect(mapStateToProps)(BtnPlayAgain);
