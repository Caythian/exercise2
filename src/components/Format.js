import React from 'react';
import { useState } from 'react';
import '../App.css';
import BarsSolid from "../Images/bars-solid.svg";


function Menu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const menupop = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <div className="menu-icon" onClick={menupop}>
        <img src={BarsSolid} width="2%" alt="Menu Icon"/>
      </div>
      <div
        className="menu"
        id="menu"
        style={{ display: menuVisible ? "block" : "none" }}
      >
        <ul>
          <li>
            <a href="HOME.html">Home</a>
          </li>
          <li>
            <a href="CUL.html">Origami as a Culture</a>
          </li>
          <li>
            <a href="TUTORIAL.html">Tutorial</a>
          </li>
          <li>
            <a href="REC.html">Virtual Archive</a>
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

