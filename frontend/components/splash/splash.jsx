import React from 'react';
import {Link} from 'react-router-dom';

const Splash = (props) => (
  <header id='splash-header'>
    <nav id='splash-nav'>
      <div id='left'>
        <div id='logo'>
        </div>
        <ul></ul>
      </div>
      <div id='right'>
        <Link id='login-btn' to='/login'>{props.session}</Link>
      </div>
    </nav>
    <main>
      <h1>It's time to ditch Skype and TeamSpeak.</h1>
      <p>All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone.</p>
      <p>Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.</p>
    </main>
  </header>
);

export default Splash;