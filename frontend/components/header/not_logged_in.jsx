import React from 'react';

class NotLoggedIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      logIn: false,
    };

  this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    console.log(user);
  }

  render() {
    console.log("props", this.props);
    return (
      <div className="header-container">
        Login/Sign Up will go here
        <form onSubmit={this.handleSubmit} className="session-form">

          <div className="session-form-container">
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="session-input"
              />
            </label>

            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="session-input"
              />
            </label>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default NotLoggedIn;
