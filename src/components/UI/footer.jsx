
import React from 'react';
import Icon from '../../assets/images/heart.svg';
import '../../assets/css/style.css';

const Footer = () => {
  return (
    <footer className="footer">
        <span className="footer__text">
          <a>From Ukraine with</a>
          <img className="footer__icon" src={Icon} alt="heart icon" />
        </span>
      </footer>
  )
}
  
  
  export default Footer;