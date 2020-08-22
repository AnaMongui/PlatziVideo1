  import React from 'react';
  import { Link } from 'react-router-dom';
  import '../assets/styles/components/Header.scss';
  import logo from '../assets/icons/logo-platzi-video-BW2.png';
  import usuario from '../assets/icons/user-icon.png';

  const Header = () => (
  <header className="header">
    <Link to='/'>
    <img className="header_img" src={logo} width="150" height="80"/>
    </Link>

    <div className="header_menu">
      <div className="header_menu--profile">
        <img src={usuario} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li>
          <Link to="/login">
          Iniciar Sesion
          </Link>
          <a href="/"></a>
        </li>
      </ul>
    </div>
  </header>
  )
  export default Header;