import React from 'react'
import Th from '../img/th_icon.png'
import Uk from '../img/uk_icon.png'
import Cn from '../img/cn_icon.png'


const Dropdown = () => {
  return (
    <div className="dropdown">
        <button className='item01'>
        Business customers
        <i className="bi bi-chevron-down"></i>
        </button>
        <div className="dropdown-content">
            <ul>
            <li style={{padding:20}}><i class="bi bi-plus-circle"></i> Create a page with nightlife</li>
            <li style={{padding:20}}><i class="bi bi-clipboard-check"></i> Our services</li>
            <li style={{padding:20}}><i class="bi bi-credit-card-fill"></i> Service fee</li>
            <li style={{padding:20}}><i class="bi bi-person-plus-fill"></i> Apply for service</li>
            </ul>
        </div>
    </div>
  );
};

export default Dropdown;
