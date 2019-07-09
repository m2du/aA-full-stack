import React from 'react';

import {joinGuild} from '../../utils/invite_api_util';

class Invite extends React.Component {
  componentDidMount() {
    joinGuild(this.props.match.params.invite)
      .then(guild => {
        this.props.history.push(`/channels/${guild.guild.id}`);
      });
  }

  render() {
    return (<div></div>);
  }
}

export default Invite;