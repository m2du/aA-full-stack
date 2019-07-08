import React from 'react';

export default ({buttonText}) => (
  <div className='modal-action-bar'>
    <input className={`guild-modal-submit guild-${buttonText.toLowerCase()}`} type='submit' value={buttonText}/>
    <div className='back-button-wrapper'>
      <button className='back-button' onClick={clickBack}>
        <img src={window.images.backArrow}/>
        Back
      </button>
    </div>
  </div>
);

const clickBack = e => {
  e.preventDefault();
  document.getElementById('add-guild-options').classList.remove('hide-left');
  document.getElementById('create-guild-option').classList.add('hide-right');
};