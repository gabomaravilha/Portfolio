import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BtnPlayAgain from '../components/Buttons/BtnPlayAgain';
import Header from '../components/Header';
import { savePlayer } from '../services/storage';

class Feedback extends React.Component {
  componentDidMount() {
    const { player } = this.props;
    const { name, gravatarIMG: picture, score } = player;
    const playerObj = { name, score, picture };
    savePlayer(playerObj);
  }

  renderPerformanceMessage = () => {
    const {
      player: { assertions },
    } = this.props;
    const numberMinAssertions = 3;

    if (assertions < numberMinAssertions) return 'Could be better...';
    return 'Well Done!';
  };

  render() {
    const { player } = this.props;
    const { assertions, score } = player;
    return (
      <>
        <Header />
        <div>
          <span data-testid="feedback-text">{this.renderPerformanceMessage()}</span>
          <hr />
          <span data-testid="feedback-total-score">{score}</span>
          <hr />
          <span data-testid="feedback-total-question">{assertions}</span>
          <hr />
          <BtnPlayAgain />
          <Link to="/ranking">
            <button type="button" data-testid="btn-ranking">
              Ranking
            </button>
          </Link>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  player: state.player,
});

Feedback.propTypes = {
  player: PropTypes.shape({
    assertions: PropTypes.number.isRequired,
    gravatarIMG: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Feedback);
