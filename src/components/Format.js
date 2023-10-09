import React from 'react';
import { useState } from 'react';
import '../App.css';
import BarsSolid from "../Images/bars-solid.svg";
import { Link } from 'react-router-dom';


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
            <Link to='./App'>Home</Link>
          </li>
          <li>
            <Link to='./Culture'>Origami as A Culture</Link>
          </li>
          <li>
            <Link to='./Tutorial'>Tutorial</Link>
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

