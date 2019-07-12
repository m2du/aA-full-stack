import React from 'react';

import UserListItemContainer from './user_list_item_container';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users
    };
  }

  render() {
    const users = this.props.users;
    return (
      <div id='user-index'>
        <header id='user-list-header'>Users—{users.length}</header>
        <ul>
          {
            users.map(user => <UserListItemContainer key={user.id} user={user} />)
          }
        </ul>
      </div>
    )
  }
}

export default UserIndex;