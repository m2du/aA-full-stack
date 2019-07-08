import React from 'react';

import ModalActionBar from './modal_action_bar';

class CreateGuildOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div id='create-guild-option' className='add-guild-component hide-right'>
        <form id='create-guild-form' onSubmit={this.handleSubmit}>
          <div id='create-guild-form-content'>
            <h5>Create Your Server</h5>
            <p>By creating a server, you will have access to
              <strong> free </strong>
              voice and text chat to use amongst your friends.</p>
            <div id='create-guild-form-inputs'>
              <div id='create-guild-left'>
                <div>
                  <label id='server-name-label' htmlFor='server-name-input'>Server Name</label>
                  <input id='server-name-input' type='text' placeholder='Enter a server name'></input>
                </div>
                <div id='region-select'>
                  <label id='region-select-label'>Server Region</label>
                  <div id='region-select-wrapper'>
                    <div id='region-display'>
                      <img src={window.images.usFlag} />
                      <span>US West</span>
                    </div>
                    <button onClick={e => e.preventDefault()}>Change</button>
                  </div>
                  <div className='help-text'>
                    By creating a server, you agree to Discord's
                    <strong> Community Guidelines </strong>.
                  </div>
                </div>
              </div>
              <div id='create-guild-right'>
                <div id='guild-avatar-uploader'>
                  <div id='guild-avatar-uploader-inner'>
                    <div id='avatar-upload-hint'>
                      Change<br />Icon
                    </div>
                    <input id='guild-avatar-input'
                      type='file'
                      multiple accept='.jpg, .jpeg, .png, .gif' />
                  </div>
                  <small>Minimum Size: <strong>128x128</strong></small>
                </div>
              </div>
            </div>
          </div>
          <ModalActionBar buttonText={'Create'} />
        </form>
      </div>
    );
  }
}

export default CreateGuildOption;