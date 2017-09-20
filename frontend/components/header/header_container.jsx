import { connect } from 'react-redux';
import Header from './header';

import { signup, login, logout } from '../../actions/auth_actions';

const mapStateToProps = state => (
  {
    user: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors
  }
);

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
