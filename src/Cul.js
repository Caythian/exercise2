import React from 'react';
import './App.css';
import Title from './components/Title'; 
import Menu from './components/Format';
import Imageholder, { ImageinBody } from './components/Image';
import Text from './components/Text';
import {Footer} from './components/Format';
import Im1 from './Images/Ocho.jpeg';

function Culture(){
    return(
    <div>
    <Title />
    <Menu />
    <ImageinBody src={Im1} alt="Ocho and Mecho"/>
    <Footer/>
    </div>
)}
export default Culture