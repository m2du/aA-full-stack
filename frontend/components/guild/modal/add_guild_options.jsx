import React from 'react';

export default () => (
  <div id='add-guild-options' className='add-guild-component'
    style={{ backgroundImage: `url(${window.images.addGuildBgLeft}), url(${window.images.addGuildBgRight})` }}>
    <header className='add-guild-header'>Oh, another server huh?</header>
    <div id='add-guild-actions'>
      <div className='add-guild-action' onClick={clickCreate}>
        <header className='action-header'>Create</header>
        <p className='action-body'>Create a new server and invite your friends. It's free!</p>
        <img src={window.images.guildCreate} />
        <button id='add-guild-button'>Create a server</button>
      </div>
      <div className='add-guild-action' onClick={clickJoin}>
        <header className='action-header'>Join</header>
        <p className='action-body'>Enter an Instant Invite and join your friend's server.</p>
        <img src={window.images.guildJoin} />
        <button id='join-guild-button'>Join a server</button>
      </div>
      <div id='add-guild-or' style={{ backgroundImage: `url(${window.images.addGuildBgOr})` }}>or</div>
    </div>
  </div>
);

const clickCreate = () => {
  document.getElementById('add-guild-options').classList.add('hide-left');
  document.getElementById('create-guild-option').classList.remove('hide-right');
};

const clickJoin = () => {
  document.getElementById('add-guild-options').classList.add('hide-left');
};
