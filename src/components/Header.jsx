  import React from 'react';
  import { connect } from 'react-redux';
  import { Link } from 'react-router-dom';
  import gravatar from '../utils/gravatar';
  import { logoutRequest } from '../actions';
  import '../assets/styles/components/Header.scss';
  import logo from '../assets/icons/logo-platzi-video-BW2.png';
  import usuario from '../assets/icons/user-icon.png';

  const Header = props => {
    const { user } = props;
    const hasUser = Object.keys(user).length > 0;

    const handleLogout = () => {
      props.logoutRequest({});
    }

    return (
        <header className="header">
        <Link to='/'>
        <img className="header_img" src={logo} width="150" height="80"/>
        </Link>

      <div className="header_menu">
        <div className="header_menu--profile">
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={usuario} alt="" />
          }

          <p>Perfil</p>
        </div>
        <ul>

          {hasUser ?
            <li><a href="/">{user.name}</a></li>
            : null
          }

          {hasUser ?

          <li><a href="#logout" onClick={handleLogout}>Cerrar Sesion</a></li>
          : 

          <li>  
            <Link to="/login">
              Iniciar Sesion
            </Link>

          </li>

          }

          
        </ul>
      </div>
    </header>
    );
    }

  const mapStateToProps = state => {
    return {
      user: state.user
    };
  };

  const mapDispatchToProps = {
    logoutRequest,
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Header);