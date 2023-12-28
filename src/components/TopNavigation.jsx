import React from 'react'
import Nightlife01 from '../img/Night_Life-logo01.png'
import Dropdown_link_lang from './Dropdown_link-lang'
import Dropdown_lang_currency from './Dropdown_lang-currency'
import Dropdown_Business_customers from './Dropdown_Business-customers'
import "bootstrap-icons/font/bootstrap-icons.css"

const TopNavigation = ({ isScrolled, currentPage, setCurrentPage }) => {
  return (
    <div className={`top-navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className='container'>
        <div className='row'>
          <nav className="menu-bar">
            <div className="group">
              <a className="title01">
                <img src={Nightlife01} alt="Logo Night Life" style={{ width: 250 }} />
              </a>
            </div>
            <div className="group">
              <Dropdown_lang_currency/>
              <Dropdown_link_lang/>
            </div>
          </nav>
        </div>
        <div className='row'>
          <nav className={`menu-bar ${isScrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="group">
              <a
                className={`item02 ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => setCurrentPage('home')}
              >
                Home
              </a>
              <a className="item02">Events</a>
              <a className="item02">Nightclub</a>
              <a className="item02">Venues</a>
              <a className="item02">Deals</a>
              <a className="item02">News</a>
              <Dropdown_Business_customers/>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;