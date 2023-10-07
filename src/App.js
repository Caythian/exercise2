import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="headbar">
        <h className="header">Origami:  <span className="header2">More than What You Think</span></h>
    </div>
    {/* <div className="menu-icon" onclick="menupop()"> */}
        {/* <img src="Images/bars-solid.svg" width="2%" > */}
    {/* </div> */}
    <div className="menu" id="menu">
        <li><a href="HOME.html">Home</a></li>
        <li><a href="CUL.html">Origami as a Culture</a></li>
        <li><a href="TUTORIAL.html">Tutorial</a></li>
        <li><a href="REC.html">Virtual Archive</a></li>
        
    </div>
    <div className="imageholder">
        {/* <img src="Images/OrigamiIntro.jpeg" alt="OrigamiIntro" width="80%"> */}
    </div>
    <div className="Text">
        <p className="intro">
            Welcome to <span className="emph">Origami: More than What You Think</span>, where the intricate art of paper folding unfolds. With roots deep in Japan's history, origami is not just a craft but a testament to the country's rich cultural tapestry, intertwined with Shinto rituals and ancient ceremonies. While the past is embroidered with tradition, the world of origami today is vast and diverse, encompassing the lifelike beauty of figurative origami, the collective allure of modular pieces, and the hands-on utility of practical origami. Dive into our expansive resources to journey through its storied past, discover the myriad ways origami graces our daily lives, and delve deep into the fascinating mathematics underpinning each fold and crease. Welcome to a world where art meets precision, and tradition meets innovation. Welcome to the universe of origami.
        </p>
    </div>
    <div className="footer">
        <p>&copy; 2023 Origami: More than What You Think. All Rights Reserved.</p>
    </div>
<script src="script.js"></script>        
    </div>
  );
}

export default App;
