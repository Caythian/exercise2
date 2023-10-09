import React from 'react';
import './App.css';
import Title from './components/Title'; 
import Menu from './components/Format';
import {Linklist3} from './components/Image';
import {Subt} from './components/Text';
import {Footer} from './components/Format';

function Resources(){
    return(
    <div>
        <Title/>
        <Menu/>
        <Subt subt="Origami Virtual Archive"/>
        <Linklist3
            des1="This is the official website of Robert J. Lang about his origami practices. You can find many crease patterns and his writings about origami."
            des2="This is the interview done by WIERD with Robert J. Lang, in which Lang talks about how he became passionate about origami."
            des3="This is Lang's TedTalk about the conceptual conflation between math and origami."
            des4="This is a Youtube video by PBS Terra about how origami could be functional and the mathematical implication behind folds and creases."
            des5="This is a youtube video talking specifically about how the study of origami could lead to a change in the design of space stations, specifically the solar panels."
            des6="This video suggests that contemporary architecture is sometimes inspired by origami, that the surface of the buildings mimics the polygons we see in modular origami"
            des7="OrigamiUSA is a non-profit organization devoted to the promotion and sharing of the art of origami, or paper folding. The organization offers memberships to origami enthusiasts, providing access to a supportive community, resources, and events, including classes, workshops, and an Annual Convention. On its website, visitors can find a wealth of origami-related resources, including instructional videos, diagrams, articles, and an online store offering origami supplies and books. The site also provides information about upcoming events and activities, supporting both individual folders and origami groups and clubs."
            />
        <Footer/>
    </div>
)}
export default Resources;