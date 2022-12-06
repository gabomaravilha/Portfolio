const email = 'gabrieldru@gmail.com';
const linkEmailImage = 'https://www.gravatar.com/avatar/08a6480bc560da0c5e4d85c7e1faeb9';

export const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  gravatarIMG: linkEmailImage,
};

export const CUSTOM_PLAYER_STATE_BELOW = {
  name: 'CUSTOM_PLAYER_STATE',
  assertions: 2,
  score: 70,
  gravatarEmail: email,
  gravatarIMG: linkEmailImage,
};

export const CUSTOM_PLAYER_STATE_MEDIUM = {
  name: 'CUSTOM_PLAYER_STATE',
  assertions: 3,
  score: 90,
  gravatarEmail: email,
  gravatarIMG: linkEmailImage,
};

export const CUSTOM_PLAYER_STATE_ABOVE = {
  name: 'CUSTOM_PLAYER_STATE',
  assertions: 5,
  score: 150,
  gravatarEmail: email,
  gravatarIMG: linkEmailImage,
};
