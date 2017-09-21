import React from 'react';

class LoggedIn extends React.Component {
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
        Logout Button will go here
      </div>
    )
  }
}

export default LoggedIn;
