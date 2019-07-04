import React from 'react';
import {Link} from 'react-router-dom';

const Splash = (props) => (
  <div id='splash'>
    <header id='splash-header'>
      <nav id='splash-nav'>
        <div id='left-nav'>
          <div id='logo'>
            <img id='logo-img' src={window.images.logo} />
          </div>
          <ul></ul>
        </div>
        <div id='right-nav'>
          <ul>
            <li><Link id='login-btn' to={props.target}>{props.session}</Link></li>
          </ul>
        </div>
      </nav>
    </header>
    <main>
      <div>
        <h1 id='splash-title'>It's time to ditch Skype and TeamSpeak.</h1>
        <p id='splash-blurb'>
          All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone.<br />
          Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.
        </p>
      </div>
    </main>
    <div id='splash-images-container'>
      <div id='splash-images-inner'>
        <div id='splash-shadow'></div>
        {/* background decoration images */}
        <img id='triangle-left' className='splash-bg-deco' src={window.images.splashTriangle} />
        <img id='triangle-top' className='splash-bg-deco' src={window.images.splashTriangle} />
        <img id='triangle-mid' className='splash-bg-deco' src={window.images.splashTriangle} />
        <img id='dot-1' className='splash-bg-deco' src={window.images.splashDot} />
        <img id='dot-2' className='splash-bg-deco' src={window.images.splashDot} />
        <img id='dot-3' className='splash-bg-deco' src={window.images.splashDot} />
        <img id='dot-4' className='splash-bg-deco' src={window.images.splashDot} />
        <img id='dot-5' className='splash-bg-deco' src={window.images.splashDot} />
        <img id='circle-left' className='splash-bg-deco' src={window.images.splashO} />
        <img id='circle-right' className='splash-bg-deco' src={window.images.splashO} />
        <img id='circle-bot' className='splash-bg-deco' src={window.images.splashO} />
        <img id='square-bot' className='splash-bg-deco' src={window.images.splashSquare} />
        <img id='square-mid' className='splash-bg-deco' src={window.images.splashSquare} />
        <img id='square-top' className='splash-bg-deco' src={window.images.splashSquare} />
        <img id='x-mid' className='splash-bg-deco' src={window.images.splashX} />
        <img id='x-right' className='splash-bg-deco' src={window.images.splashX} />
        <img id='x-left' className='splash-bg-deco' src={window.images.splashX} />
        {/* foreground images */}
        <img id='splash-potion' className='splash-fg-image' src={window.images.splashPotion} />
        <img id='splash-shield' className='splash-fg-image' src={window.images.splashShield} />
        <img id='splash-question' className='splash-fg-image' src={window.images.splashQuestion} />
        <img id='splash-desktop' className='splash-fg-image' src={window.images.splashDesktop} />
        <img id='splash-android' className='splash-fg-image' src={window.images.splashAndroid} />
        <img id='splash-iphone' className='splash-fg-image' src={window.images.splashiPhone} />
        <img id='splash-gamepad' className='splash-fg-image' src={window.images.splashGamepad} />
        <img id='splash-laptop' className='splash-fg-image' src={window.images.splashLaptop} />
        <img id='splash-headphone' className='splash-fg-image' src={window.images.splashHeadphone} />
      </div>
    </div>
  </div>
  
);

export default Splash;