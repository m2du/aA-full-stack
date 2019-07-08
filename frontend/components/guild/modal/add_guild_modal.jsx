import React from 'react';

import AddGuildOptions from './add_guild_options';
import CreateGuildOption from './create_guild_option';

export default ({hideAddGuild}) => (
  <div id='add-guild-modal'>
    <div className='backdrop-dark' onClick={hideAddGuild}></div>
    <div id='add-guild-container'>
      <AddGuildOptions />
      <CreateGuildOption />
    </div>
  </div>
);