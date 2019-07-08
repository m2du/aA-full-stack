import React from 'react';

export default ({showAddGuild}) => (
  <div className='guild-item'>
    <div className='guild-container'>
      <button className='guild-link' onClick={showAddGuild}>
        <svg id="plus-svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="#43b581" d="M21 11.001H13V3.00098H11V11.001H3V13.001H11V21.001H13V13.001H21V11.001Z"></path>
        </svg>
      </button>
    </div>
    <div className='guild-select-bar'><span></span></div>
  </div>
);