import React from 'react';

import { AddGuildOptions } from './modal_components';

export default () => (
  <div id='add-guild-modal'>
    <div className='backdrop-dark'>
      <div id='add-guild-container'>
        <AddGuildOptions />
      </div>
    </div>
  </div>
);