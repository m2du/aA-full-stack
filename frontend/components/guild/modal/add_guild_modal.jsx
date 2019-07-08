import React from 'react';

import { AddGuildOptions } from './modal_components';

export default ({hideAddGuild}) => (
  <div id='add-guild-modal'>
    <div className='backdrop-dark' onClick={hideAddGuild}></div>
    <div id='add-guild-container'>
      <AddGuildOptions />
    </div>
  </div>
);