import React from 'react';

import AddGuildOptions from './add_guild_options';
import CreateGuildOptionContainer from './create_guild_option_container';
import JoinGuildOptionContainer from './join_guild_option_container';

export default ({hideAddGuild}) => (
  <div id='add-guild-modal'>
    <div className='backdrop-dark' onClick={hideAddGuild}></div>
    <div id='add-guild-container'>
      <AddGuildOptions />
      <CreateGuildOptionContainer />
      <JoinGuildOptionContainer />
    </div>
  </div>
);