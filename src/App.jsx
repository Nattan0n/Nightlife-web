import {useEffect, useState} from 'react'
import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import Nightlife from './img/Night_Life-logo.png'
import TopNavigation from './components/TopNavigation'
import Neonline from './components/Neonline'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [eventData, setEventData] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(10);
  const duplicatedEventData = Array.from({ length: 10 }, () => eventData).flat();

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
  // ตั้งค่าระยะเวลาในการเปลี่ยนการเลือกรายการ (ms)
  const autoSlideInterval = 7000; // 7 วินาที

  useEffect(() => {
    const intervalId = setInterval(() => {
      // เปลี่ยนไปรายการถัดไป
      setCurrentEvent((prev) => (prev + 1) % duplicatedEventData.length);
    }, autoSlideInterval);

    // ทำความสะอาด interval เมื่อ component ถูก unmount
    return () => clearInterval(intervalId);
  }, [currentEvent, eventData]);

  const nextEvent = () => {
    setCurrentEvent((prevEvent) => (prevEvent + 1) % duplicatedEventData.length);
  };

  const prevEvent = () => {
    setCurrentEvent((prevEvent) => (prevEvent - 1 + duplicatedEventData.length) % duplicatedEventData.length);
  };
  // ฟังก์ชันสำหรับการเปลี่ยนไปยังรายการที่กำหนด
  const goToEvent = (index) => {
    setCurrentEvent(index);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`App ${isScrolled ? 'scrolled' : ''}`}>
      <TopNavigation
        isScrolled={isScrolled}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className='container'>
        <div className="group01">
          <img src={Nightlife} alt="Logo Night Life" style={{width: 200}}/>
        </div>
      </div>
      <Neonline/>
      <div className='container'>
        <div className="title-featured">
          <p>Featured</p>
        </div>
      </div>
      <div className='container eventslide'>
        <div className='event'>
          {duplicatedEventData.map((event, index) => (
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
      <Neonline/>
      <div className='container'>
        <div className="slideshow-container">
          {duplicatedEventData[currentEvent] && (
            <>
              {Array.from({ length: 3 }).map((_, index) => (
                <img 
                  key={index}
                  src={duplicatedEventData[currentEvent].imageUrl}  
                  alt='Avatar'
                  style={{ objectFit: 'cover', width: '40%', height: '200px', marginBlock:'5%',marginInline:10, borderRadius:25}}
                />
              ))}
            </>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
