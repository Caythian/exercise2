import React from 'react';
import './App.css';
import Title from './components/Title'; 
import Menu from './components/Format';
import {Imageholder} from './components/Image';
import Text from './components/Text';
import {Footer} from './components/Format';




function App() {
  return (
    <div>
      <Title />
      <Menu />
      <Imageholder/>
      <Text/>
      <Footer/>
    </div>
      )
}

export default App;
