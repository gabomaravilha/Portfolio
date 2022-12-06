import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const username = useSelector((globalState) => globalState.player.name);
  const gravatarIMG = useSelector((globalState) => globalState.player.gravatarIMG);
  const score = useSelector((globalState) => globalState.player.score);

  return (
    <header>
      <img src={ gravatarIMG } alt={ username } data-testid="header-profile-picture" />
      <h2 data-testid="header-player-name">{username}</h2>
      <h3 data-testid="header-score">
        {score}
      </h3>
    </header>
  );
}

export default Header;
