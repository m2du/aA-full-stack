import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.displayErrors = this.displayErrors.bind(this);
    this.resetLabels = this.resetLabels.bind(this);
  }

  render() {
    const formType = this.props.formType;
    const {email, username, password} = this.state;
    const buttonText = (formType === 'login') ? 'Login' : 'Continue';
    return (
      <div>
        <div id='session-bg-wrapper'>
          <div id='session-bg'>
            <img src={window.images.sessionBg}/>
          </div>
        </div>
        <div id='session-wrapper'>
          <div>
            <div id='session-content'>
              {(formType === 'login') ?
                <div>
                  <h2>Welcome back!</h2>
                  <p id='subtitle'>We're so excited to see you again!</p>
                </div> :
                <div><h2>Create an account</h2></div>
              }
              <form id='session-form' onSubmit={this.handleSubmit}>
                <div className='input-item'>
                  <h5 id='email-label'>Email</h5>
                  <input id='email-input' 
                         autoComplete='off' 
                         type="email" 
                         onChange={this.update('email')} 
                         value={email}/>
                </div>

                {(formType === 'signup') ?
                  <div className='input-item'>
                    <h5 id='username-label'>Username</h5>
                    <input id='username-input'
                           type="text" 
                           autoComplete='off' 
                           onChange={this.update('username')} 
                           value={username}/>
                  </div> :
                  <></>
                }

                <div className='input-item'>
                  <h5 id='password-label'>Password</h5>
                  <input id='password-input' 
                         type="password" 
                         onChange={this.update('password')} 
                         value={password}/>
                </div>

                <input id='session-submit-btn' type="submit" value={buttonText}/>

                {(formType === 'login') ?
                  <div className='form-change-option'>
                    <small>Need an account?</small><Link to='/register'>Register</Link>
                    <small> or </small><button onClick={this.demoLogin}>try a demo!</button>
                  </div> :
                  <div className='form-change-option'>
                    <Link to='login'>Already have an account?</Link>
                  </div>
                }
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  update(attr) {
    return e => this.setState({ [attr]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.inputsFilled()) {
      this.props.submitUser(this.state).then(
        () => {},
        () => {
          this.resetLabels();
          this.displayErrors();
        }
      );
    }
  }

  inputsFilled() {
    this.resetLabels();

    let filled = true;
    let span;
    
    const emailInput = document.getElementById('email-input');
    if (emailInput.value.length === 0) {
      filled = false;
      const emailLabel = document.getElementById('email-label');
      span = document.createElement('span');
      span.append(' - This field is required');
      emailLabel.append(span);
      emailLabel.classList.add('text-error');
      emailInput.classList.add('input-error');
    }
    
    if (this.props.formType === 'signup') {
      filled = false;
      const usernameInput = document.getElementById('username-input')
      if (usernameInput.value.length === 0) {
        const usernameLabel = document.getElementById('username-label');
        span = document.createElement('span');
        span.append(' - This field is required');
        usernameLabel.append(span);
        usernameLabel.classList.add('text-error');
        usernameInput.classList.add('input-error');
      }
    }
    
    const passwordInput = document.getElementById('password-input');
    if (passwordInput.value.length === 0) {
      filled = false;
      const passwordLabel = document.getElementById('password-label');
      span = document.createElement('span');
      span.append(' - This field is required');
      passwordLabel.append(span);
      passwordLabel.classList.add('text-error');
      passwordInput.classList.add('input-error');
    }

    return filled;
  }

  displayErrors() {
    const errorFlag = this.props.errors[0];
    const errors = [' - Email does not exist.',
                    ' - Password does not match.',
                    ' - Email is already taken.',];

    let label;
    const span = document.createElement('span');
    span.append(errors[errorFlag]);

    switch (errorFlag) {
      case 0:
        label = document.getElementById('email-label');
        document.getElementById('email-input').classList.add('input-error');
        break;
      case 1:
        label = document.getElementById('password-label')
        document.getElementById('password-input').classList.add('input-error');
        break;
      case 2:
        label = document.getElementById('email-label');
        document.getElementById('email-input').classList.add('input-error');
        break;
      default:
        break;
    }

    label.append(span);
    label.classList.add('text-error');
  }

  resetLabels() {
    let emailLabel = document.getElementById('email-label');
    emailLabel.innerHTML = 'Email';
    emailLabel.classList.remove('text-error');
    document.getElementById('email-input').classList.remove('input-error');

    if (this.props.formType === 'signup') {
      let usernameLabel = document.getElementById('username-label');
      usernameLabel.innerHTML = 'Username';
      usernameLabel.classList.remove('text-error');
      document.getElementById('username-input').classList.remove('input-error');
    }

    let passwordLabel = document.getElementById('password-label');
    passwordLabel.innerHTML = 'Password';
    passwordLabel.classList.remove('text-error');
    document.getElementById('password-input').classList.remove('input-error');
  }

  async demoLogin(e) {
    e.preventDefault();

    const demoUser = {
      email: 'demouser@disboard.game',
      password: 'letsplayboardgames'
    };

    const sleep = ms => new Promise(res => setTimeout(res, ms));

    document.getElementById('email-input').focus();
    for (let i = 1; i <= demoUser.email.length; i++) {
      this.setState({ email: demoUser.email.substr(0, i) });
      await sleep(50);
    }

    await sleep(250);

    document.getElementById('password-input').focus();
    for (let i = 1; i <= demoUser.password.length; i++) {
      this.setState({ password: demoUser.password.substr(0, i) });
      await sleep(50);
    }

    await sleep(250);

    document.getElementById('session-submit-btn').click();
    document.getElementById('password-input').blur();
  }
}

export default SessionForm;