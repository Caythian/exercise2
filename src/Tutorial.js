import React from 'react';
import './App.css';
import Title from './components/Title'; 
import Menu from './components/Format';
import {Linklist1,Linklist2, Imagetutorial} from './components/Image';
import {Subt} from './components/Text';
import {Footer} from './components/Format';

function Tutorial(){
    return(
    <div>
            <Title />
            <Menu />
            <Subt subt="Origami Basics:"/>
            <Imagetutorial />
            <Subt subt="Origami Tutorial Websites:"/>
            <Linklist1 />
            <Subt subt="Origami Tutorial Youtube Channels:"/>
            <Linklist2 />
            <Footer/>
    </div>
)
}
export default Tutorial;