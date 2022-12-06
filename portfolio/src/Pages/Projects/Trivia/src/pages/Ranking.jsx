import React from 'react';
import { Link } from 'react-router-dom';
import { getRankingFromStorage } from '../services/storage';

function Ranking() {
  const renderRanking = () => {
    const ranking = getRankingFromStorage();
    const sortedRanking = ranking.sort((a, b) => a.score - b.score);
    return sortedRanking.reverse().map(({ name, score, picture }, index) => (
      <div key={ index }>
        <img src={ picture } alt={ name } />
        <h2 key={ name } data-testid={ `player-name-${index}` }>{name}</h2>
        <h2 data-testid={ `player-score-${index}` }>{score}</h2>
      </div>
    ));
  };

  return (
    <div>
      <h2 data-testid="ranking-title">Ranking</h2>
      <section>{renderRanking()}</section>
      <Link to="/" data-testid="btn-go-home">
        Go Home
      </Link>
    </div>
  );
}

export default Ranking;
