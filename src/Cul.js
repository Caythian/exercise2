import React from 'react';
import './App.css';
import Title from './components/Title'; 
import Menu from './components/Format';
import Imageholder, { ImageinBody },{Video} from './components/Image';
import Text,{Subt},{Intro},{Body} from './components/Text';
import {Footer} from './components/Format';
import Im1 from './Images/Ocho.jpeg';
import { Video } from './components/Image';

function Culture(){
    return(
    <div>
    <Title />
    <Menu />
    <Intro intro= "Many individuals commonly perceive origami primarily as a craft and art form rather than an embodiment of culture. However, origami holds profound cultural significance, tracing back to venerable ceremonial practices in both China and Japan. Its variant, recreational origami, has garnered global acclaim in the contemporary era. Furthermore, the convergence of origami with science and mathematics is evident as researchers increasingly incorporate its principles across various disciplines."
     />
    <Subt subt="Origami and Its Ceremonial Uses"
    />
    <Body body="Indeed, while the invention of paper can be credited to China, the genesis of origami is often linked to Japan, particularly within the context of Shintoism. Initially, paper in Japan was primarily utilized for official documentation and the transcription of Buddhist scriptures. However, the advent of *washi*, a delicate yet resilient type of paper, revolutionized its usage. Within the Shinto faith, *washi* played an integral role in religious observances. It became a tradition to encase offerings to deities in this paper, a practice reflecting the deep reverence and sanctity associated with these rituals."
    />
    <Video videoLink="https://www.youtube.com/embed/6qVf5TP5KtU?si=cujiBO0irTbEc9DS"/>
    <ImageinBody src={Im1} alt="Ocho and Mecho" description="Ocho and Mecho Decorating the Sake Bottles"/>

    <Footer/>
    </div>
)}
export default Culture