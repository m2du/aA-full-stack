import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
  }

  render() {
    const {user} = this.props;
    return (
      <div id='main-app'>
        <h1>{user.username + "#" + user.tag}</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Main;