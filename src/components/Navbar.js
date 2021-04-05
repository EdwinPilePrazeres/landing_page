import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

   const showButton = () => {
    if (window.innerWidth <= 1100) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  React.useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  

  return (
    <>
      <nav className="navbar">
        <div className="navbar_container">
          <Link
            
            className="navbar_logo"
            onClick={closeMobileMenu}
          >
            <img
              src={require("./images/logo_F14.png").default}
              alt="F14 Tomcat"
            />
          </Link>
          <div className="menu_icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? 'nav_menu active' : 'nav_menu' }>
              <li className='nav_items'>
                  <Link  className='nav_links' onClick={closeMobileMenu} exact="true">
                    Mission
                  </Link>
              </li>
              <li className='nav_items'>
                  <Link to='/planets/venus' className='nav_links' onClick={closeMobileMenu}>
                    Science
                  </Link>
              </li>
              <li className='nav_items'>
                  <Link  className='nav_links' onClick={closeMobileMenu}>
                    Journey
                  </Link>
              </li>
              <li className='nav_items' >
                  <Link className='nav_links' onClick={closeMobileMenu}>
                    Launch
                  </Link>
              </li>
              <li className='nav_items'>
                  <Link  className='nav_links' onClick={closeMobileMenu}>
                    Shop
                  </Link>
              </li>
          </ul>
          {button && <Link to='' className='nav_Button'>More Projects</Link>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
