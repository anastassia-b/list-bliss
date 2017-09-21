import React from 'react';
import NotLoggedIn from './not_logged_in';
import LoggedIn from './logged_in';

class Header extends React.Component {

  render() {
    return (
      <div className="">
        <NotLoggedIn />
        <LoggedIn />
      </div>
    )
  }
}

export default Header;
