import { useState } from 'react'
import './App.css'
import Nightlife from './img/Night_Life-logo.png'
import Nightlife01 from './img/Night_Life-logo01.png'
import Data01 from './img/Data01.jpg'

function App() {
  return (
    <div className='App'>
      <div className='top-navigation'>
        <div className='container top-navigation'>
          <div className='row'>
            <nav className="menu-bar">
              <div className="group">
                <a className="item title">
                  <img src={Nightlife01} alt="Logo Night Life" style={{width: 250}}/>
                </a>
              </div>
              <div className="group">
                <a className="item">Link 1</a>
                <a className="item">Link 2</a>
              </div>
            </nav>
          </div>
          <div className='row'>
            <nav className="menu-bar">
              <div className="group">
                <a className="item active">Home</a>
                <a className="item">Events</a>
                <a className="item">Nightclub</a>
                <a className="item">Venues</a>
                <a className="item">Deals</a>
                <a className="item">News</a>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="group01">
          <img src={Nightlife} alt="Logo Night Life" style={{width: 200}}/>
        </div>
      </div>
      <div className='container'>
        <div className="lineneon"></div>
      </div>
      <div className='container'>
        <div className="title-featured">
          <p>Featured</p>
        </div>
      </div>
      <div className='container'>
        <div>
          <img src={Data01} alt="Logo Night Life" style={{width: 300}}/>
        </div>
      </div>
    </div>
  )
}

export default App
