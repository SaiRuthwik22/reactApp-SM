import React, { useState } from 'react';
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faBookmark, faHouse, faUser, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header() {
  const [active,setActive] = useState("home")
  const [sidemenu,setSideMenu] = useState(false)


  function handleActive(name){
    setActive(name)
  }

  return (
    <div className='header'>
      <h5>TravelMedia.in</h5>
      <div className='menu-container'>
      <div className='menu-icons'>
        <div className={`icon ${active == "home"?"active":""}`} onClick={()=>handleActive("home")}>
          <Link to="/"><FontAwesomeIcon icon={faHouse} className={`fa-icon ${active == "home"?"active-icon":""}`}  /></Link>
        </div>
        <div className={`icon ${active == "bell"?"active":""}`} onClick={()=>handleActive("bell")}>
          <Link to="/"><FontAwesomeIcon icon={faBell} className={`fa-icon ${active == "bell"?"active-icon":""}`}   /></Link>
        </div>
        <div className={`icon ${active == "bookmark"?"active":""}`} onClick={()=>handleActive("bookmark")}>
          <Link to="/"><FontAwesomeIcon icon={faBookmark} className={`fa-icon ${active == "bookmark"?"active-icon":""}`}  /></Link>
        </div>
        <div className={`icon ${active == "user"?"active":""}`} onClick={()=>handleActive("user")}>
          <Link to="/"><FontAwesomeIcon icon={faUser}className={`fa-icon ${active == "user"?"active-icon":""}`}  /></Link>
        </div>
      </div>
      </div>
      <div id='mobile'>
        <FontAwesomeIcon icon={sidemenu ? faX :faBars} className='mobile-icon'  onClick={()=>{setSideMenu(!sidemenu)}} />
        {sidemenu && <div className='sidemenu'>
          <ul>
            <li>Home</li>
            <li>BookMark</li>
            <li>Saved</li>
            <li>User</li>
            
          </ul>
          </div>}
      </div>
    </div>
  );
}

export default Header;
