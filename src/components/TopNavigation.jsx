import React from 'react'
import Nightlife01 from '../img/Night_Life-logo01.png';
import Th from '../img/th_icon.png';
import Uk from '../img/uk_icon.png';
import Dropdown from './Dropdown';
import "bootstrap-icons/font/bootstrap-icons.css";

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
              <a className="item01">฿THB<i className="bi bi-chevron-down"></i></a>
              <a
                className={`item01 ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => setCurrentPage('home')}
              >
                <img
                  src={Th}
                  alt="TH"
                  style={{ width: 35, paddingInline: 10 }}
                />
                TH
                <i className="bi bi-chevron-down"></i>
              </a>
              <Dropdown/>
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
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;