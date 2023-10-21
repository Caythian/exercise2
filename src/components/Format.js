import React from 'react';
import { useState,useRef} from 'react';
import '../App.css';
import OpenMenu from '../Images/Open.svg';
import ClosedMenu from '../Images/Closed.svg';
import { Link } from 'react-router-dom';
import Turn from '../Turn.mp3';

function Menu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const audioRef = useRef(null);
  const menupop = () => {
    setMenuVisible(!menuVisible);
    audioRef.current.play();
  };

  return (
    <div>
       <audio ref={audioRef} src={Turn} style={{ display: 'none' }}></audio>
      <div className="menu-icon" onClick={menupop}>
        {menuVisible ? (
          <img className="imgMenu" src={OpenMenu} alt="Close Icon"/>
        ) : (
          <img className="imgMenu" src={ClosedMenu} alt="Open Icon"/>
        )}
      </div>
      <div
        className="menu"
        id="menu"
        style={{ display: menuVisible ? "block" : "none" }}
      >
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Culture'>Origami as A Culture</Link>
          </li>
          <li>
            <Link to='/Tutorial'>Tutorial</Link>
          </li>
          <li>
            <Link to='/Resources'>Virtual Archive</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Footer(){
  return(<div className="footer">
        <p>&copy; 2023 Origami: More than What You Think. All Rights Reserved.</p>
      </div>)
}
export default Menu;
export {Footer};

