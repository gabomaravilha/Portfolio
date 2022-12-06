export const saveTokenOnStorage = (token) => {
  localStorage.setItem('token', token);
};

export const getTokenFromStorage = () => {
  const token = localStorage.getItem('token');
  return token || '';
};

export const getRankingFromStorage = () => {
  const ranking = JSON.parse(localStorage.getItem('ranking'));
  return ranking || '';
};

export const savePlayer = (player) => {
  const oldRanking = getRankingFromStorage();
  const newRanking = [...oldRanking, player];
  localStorage.setItem('ranking', JSON.stringify(newRanking));
};
