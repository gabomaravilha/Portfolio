export const fetchToken = async () => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const token = await response.json();
  return token;
};

export const fetchQuestions = async (token, amount) => {
  const URL = `https://opentdb.com/api.php?amount=${amount}&token=${token}`;
  const response = await fetch(URL);
  const questions = await response.json();
  return questions;
};
