import * as React from 'react';
import {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import './style.css'
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle =()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div>
     
      <div><button onClick={handleMenuToggle}>
       {
         isMenuOpen ?<FaTimes className='icon'/>:<FaBars className='icon'/>
       }
       </button>
       {
         isMenuOpen && (
           <ul className='ul'>
             <div className='logo'><img src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-500x281.png"/></div>
             <li>Home</li>
          <li>Blog</li>
          <li>Contact</li>
           </ul>
         )
       }</div>
   
     
     
    </div>
  );
}
