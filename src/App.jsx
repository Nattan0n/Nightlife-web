import {useEffect, useState} from 'react'
import './App.css'
import Data from './data/data.json'
import Nightlife from './img/Night_Life-logo.png'
import Nightlife01 from './img/Night_Life-logo01.png'
import Data01 from './img/Data01.jpg'
import Data04 from './img/Data04.jpg'
import Data05 from './img/Data05.jpg'
import GooglePlay from './img/google_play.png'
import AppStore from './img/app_store.png'
import Th from './img/th_icon.png'
import Uk from './img/uk_icon.png'
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [eventData, setEventData] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../src/data/data.json');
        const data = await response.json();
        setEventData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const images = [
    Data01,
    Data04,
    Data05,
    // เพิ่มรูปภาพตามต้องการ
  ];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };
  
  const goToImage = (index) => {
    setCurrentImage(index);
  };


  // ตั้งค่าระยะเวลาในการเปลี่ยนการเลือกรายการ (ms)
  const autoSlideInterval = 7000; // 5 วินาที

  useEffect(() => {
    const intervalId = setInterval(() => {
      // เปลี่ยนไปรายการถัดไป
      setCurrentEvent((prev) => (prev + 1) % eventData.length);
    }, autoSlideInterval);

    // ทำความสะอาด interval เมื่อ component ถูก unmount
    return () => clearInterval(intervalId);
  }, [currentEvent, eventData]);

  // ฟังก์ชันสำหรับการเปลี่ยนไปยังรายการถัดไป
  const nextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % eventData.length);
  };

  // ฟังก์ชันสำหรับการเปลี่ยนไปยังรายการก่อนหน้า
  const prevEvent = () => {
    setCurrentEvent((prev) => (prev - 1 + eventData.length) % eventData.length);
  };

  // ฟังก์ชันสำหรับการเปลี่ยนไปยังรายการที่กำหนด
  const goToEvent = (index) => {
    setCurrentEvent(index);
  };
  return (
    <div className='App'>
      <div className='top-navigation'>
        <div className='container top-navigation'>
          <div className='row'>
            <nav className="menu-bar">
              <div className="group">
                <a className="title01">
                  <img src={Nightlife01} alt="Logo Night Life" style={{width: 250}}/>
                </a>
              </div>
              <div className="group">
                <a className="item01">฿THB<i className="bi bi-chevron-down"></i></a>
                <a className="item01">
                  <img 
                    src={Th} 
                    alt="TH" 
                    style={{width: 35,paddingInline:10}} 
                  />
                  TH
                  <i className="bi bi-chevron-down"></i>
                </a>
              </div>
            </nav>
          </div>
          <div className='row'>
            <nav className="menu-bar">
              <div className="group">
                <a className="item02 active">Home</a>
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
      <div className='container'>
        <div className="group01">
          <img src={Nightlife} alt="Logo Night Life" style={{width: 200}}/>
        </div>
      </div>
      <div className='container neon'>
        <div className="lineneon"></div>
      </div>
      <div className='container'>
        <div className="title-featured">
          <p>Featured</p>
        </div>
      </div>
      <div className='container eventslide'>
        <div className='event'>
          {eventData.map((event, index) => (
            <div
              key={index}
              className={`card ${index === currentEvent ? 'active' : ''}`}
              onClick={() => goToEvent(index)}
              style={{
                transform: `translateX(${-currentEvent * 100}%)`, // ปรับการใช้ translateX ที่นี่
                flexShrink: 0, 
              }}
            >
              <img 
                src={event.imageUrl}  
                alt='Avatar'
                className='imgcard'
              />
              <div className="box">
                <h3 className='item03'><b>{event.caption}</b></h3> 
                <p className='item03' style={{ color: '#31ff64' }}><i className="bi bi-calendar3"></i> {event.date}</p>
                <p className='item03' style={{ color: '#31ff64' }}><i className="bi bi-clock"></i> {event.time}</p>
                <p className='item03'><i className="bi bi-geo-alt-fill"></i> {event.location}</p>   
              </div>
            </div>
          ))}
        </div>
        <div className='prev' onClick={prevEvent}>&#10094;</div>
        <div className='next' onClick={nextEvent}>&#10095;</div>
      </div>
      <div className='container'>
        <div className="title-featured">
          <p style={{fontSize:20}}>See all <i className="bi bi-chevron-right"></i></p>
        </div>
      </div>
      <div className='container neon'>
        <div className="lineneon"></div>
      </div>
      <div className='container'>
        <div className="slideshow-container">
          <img
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className="slide"
            style={{ objectFit: 'cover', width: '50%', height: '200px', margin:'5%'}}
          />
          {/* <button className="prev" onClick={prevImage}>&#10094;</button>
          <button className="next" onClick={nextImage}>&#10095;</button> */}
        </div>
      </div>
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
    </div>
  )
}

export default App
