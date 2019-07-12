import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GuildListContainer from '../guild/guild_list_container';
import GuildDetailContainer from '../guild/guild_detail_container';
import AddGuildModal from '../guild/modal/add_guild_modal';
import InviteModalContainer from '../guild/invite/invite_modal_container';
import CreateChannelModalContainer from '../guild/modal/create_channel_modal_container';
import DirectMessagePopupContainer from '../user/direct_message_popup_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
  }

  render() {
    return (
      <div id='main-app'>
        <GuildListContainer />
        <Switch>
          <Route path='/channels/:guildId/:channelId' component={GuildDetailContainer} />
          <Route path='/channels/:guildId' component={GuildDetailContainer} />
        </Switch>
        { (this.props.addGuild) ? <AddGuildModal hideAddGuild={this.props.hideAddGuild}/> : null }
        { (this.props.showInvite) ? <InviteModalContainer /> : null }
        { (this.props.createChannel) ? <CreateChannelModalContainer /> : null }
        { (this.props.dmPopup) ? <DirectMessagePopupContainer user={this.props.dmPopup} /> : null }
      </div>
    );
  }
}

export default Main;