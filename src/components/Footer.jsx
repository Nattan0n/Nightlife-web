import React from 'react'
import GooglePlay from '../img/google_play.png'
import AppStore from '../img/app_store.png'

function Footer() {
  return (
    <footer className="footer">
        <div className='container'>
        <div className="footer-service">
            <div className='container'>
            <h4>THE NIGHTLIFE MOBILE APPLICATION</h4>
            <img src={GooglePlay} alt='GooglePlay' style={{width:100, margin:10}}/>
            <img src={AppStore} alt='AppStore' style={{width:100, margin:10}}/>
            </div>
            <div className='container'>
            <h4>Main item</h4> 
            </div>
            <div className='container'>
            <h4>About us</h4>
            </div>
            <div className='container'>
            <h4>Customer Relations Department</h4>
            </div>
        </div>
        <div className="footer-container">
            <p>&copy; 2023 Nightlife. All rights reserved.</p>
        </div>
        </div>
    </footer>
  )
}

export default Footer