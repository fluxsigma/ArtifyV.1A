import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <>
        <header className="header" id="header">
          <nav className="nav ">
           
              <i className="navlogo">ARTIFY-V.1a</i> 
          
            <div className="nav__menu" id="nav__menu">
              <ul className="nav__item">
                <li className="nav__item">
                  <NavLink className="link nav__link" to="/">
                    Artify
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="link nav__link " to="/tryartify">
                    Try Artify
                  </NavLink>
                </li>
                <a href="mailto:kumaradityasharma03@gmail.com" > <li className="  copyright"  > Founder / Aditya Sharma</li> </a> 
                {/* <li className="link nav__link copyright"><i class='bx bxs-cat'></i> </li> */}
                
              </ul>
            </div>
          </nav>
        </header>
      </>
    </div>
  );
}

export default Navbar;
