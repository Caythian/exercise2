import React from 'react';
import './App.css';
import Title from './components/Title'; 
import Menu from './components/Format';
import {Imageholder} from './components/Image';
import {Intro} from './components/Text';
import {Footer} from './components/Format';




function App() {
  return (
    <div>
      <Title />
      <Menu />
      <Imageholder/>
      <Intro>Welcome to <span className="emph">Origami: More than What You Think</span>, where the intricate art of paper folding unfolds. With roots deep in Japan's history, origami is not just a craft but a testament to the country's rich cultural tapestry, intertwined with Shinto rituals and ancient ceremonies. While the past is embroidered with tradition, the world of origami today is vast and diverse, encompassing the lifelike beauty of figurative origami, the collective allure of modular pieces, and the hands-on utility of practical origami. Dive into our expansive resources to journey through its storied past, discover the myriad ways origami graces our daily lives, and delve deep into the fascinating mathematics underpinning each fold and crease. Welcome to a world where art meets precision, and tradition meets innovation. Welcome to the universe of origami.
      </Intro>
      <Footer/>
    </div>
      )
}

export default App;
