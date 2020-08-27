import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <div className='nav-label'>Menu</div>
            <ul className='nav-links'>
              <li>
                <NavLink to='/' exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/skills' exact>
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink to='/about' exact>
                  About me
                </NavLink>
              </li>
              
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-label'>Contact</div>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Email</li>
                <li>
                
                    marko92y@gmail.com
                  
                </li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Location</li>
                <li>Belgrade</li>
                <li>Serbia</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Phone</li>
                <li>+38162/856-9791</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
