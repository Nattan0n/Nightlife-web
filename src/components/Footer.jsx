import React from 'react'
import GooglePlay from '../img/google_play.png'
import AppStore from '../img/app_store.png'
import '../public/css/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className='container'>
        <div className="footer-service">
          <div className='container col'  style={{width:'150%'}}>
            <h4>THE NIGHTLIFE MOBILE APPLICATION</h4>
            <img src={GooglePlay} alt='GooglePlay' style={{width:100 ,marginBlock:20 ,marginRight:10}}/>
            <img src={AppStore} alt='AppStore' style={{width:100 ,marginBlock:20}}/>
          </div>
          <div className='container col'>
            <h4>Main item</h4> 
            <p href="#" style={{ display: 'block' ,marginBlock:20}}>News nightclub</p>
            <p href="#" style={{ display: 'block' ,marginBlock:20}}>All nightclub</p>
            <p href="#" style={{ display: 'block' ,marginBlock:20}}>Activity pictures</p>
          </div>
          <div className='container col'>
            <h4>About us</h4>
            <p href="#" style={{ display: 'block' ,marginBlock:20}}>About us</p>
            <p href="#" style={{ display: 'block' ,marginBlock:20}}>Terms of service</p>
            <p href="#" style={{ display: 'block' ,marginBlock:20}}>Privacy Policy</p>
          </div>
          <div className='container col'>
            <h4>Customer Relations Department</h4>
            <p style={{ display: 'block' ,marginBlock:20}}>Tel. 01-012345</p>
            <p style={{ display: 'block' ,marginBlock:20}}>Line : @nightlife</p>
            <p style={{ display: 'block' ,marginBlock:20}}>Wed - Fri 10 a.m. - 6 p.m.</p>
          </div>
        </div>
        <div className="footer-container">
          <p>&copy; 2023 Nightlife. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
