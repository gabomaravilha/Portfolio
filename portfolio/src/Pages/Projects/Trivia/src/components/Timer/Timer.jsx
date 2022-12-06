import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTimerAction } from '../../redux/actions';

const INITIAL_TIME = 30;
const TIMER_INTERVAL = 1000;

function Timer({ isTimeRunning }) {
  const [seconds, setSeconds] = useState(INITIAL_TIME);
  const dispatch = useDispatch();

  useEffect(() => {
    if (seconds === 0 || !isTimeRunning) {
      setSeconds(INITIAL_TIME);
      return;
    }

    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, TIMER_INTERVAL);

    return () => clearInterval(interval);
  }, [seconds, isTimeRunning]);

  useEffect(() => {
    if (seconds === 0) dispatch(toggleTimerAction());
  }, [seconds, dispatch]);

  return <div id="Timer">{seconds}</div>;
}

const mapStateToProps = (state) => ({
  isTimeRunning: state.game.isTimeRunning,
});

Timer.propTypes = {
  isTimeRunning: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Timer);
