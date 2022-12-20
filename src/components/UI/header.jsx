import React from "react";
import briefcase from '../../assets/images/briefcase.svg';
import user from '../../assets/images/user.svg';
import '../../assets/css/style.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
  <header className="header">
    <div className="header__inner">
      <a href="/main" className="header__logo">
        Travel App
      </a>
      <nav className="header__nav">
        <ul className="nav-header__list">
          <li className="nav-header__item" title="Bookings">
            <a href="/bookings" className="nav-header__inner">
              <span className="visually-hidden">Bookings</span>
              <img src={briefcase} alt=" icon" />
            </a>
          </li>
          <li className="nav-header__item" title="Profile">
            <div className="nav-header__inner profile-nav">
              <span className="visually-hidden">Profile</span>
              <img src={user} alt="profile icon" />
              <ul className="profile-nav__list">
                <li className="profile-nav__item profile-nav__username">
                  John Doe
                </li>
                <li className="profile-nav__item">
                <Link to="../sign-in" className="profile-nav__sign-out button">
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
 )
}

export default Header;