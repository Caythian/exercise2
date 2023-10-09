import React from 'react';
import '../App.css';
import OrigamiIntro from '../Images/OrigamiIntro.jpeg';
import tut1 from '../Images/tut1.jpeg';
import tut2 from '../Images/tut2.jpeg';
import tut3 from '../Images/tut3.jpeg';
import tut4 from '../Images/tut4.jpeg';


function Imageholder (){
    return(
    <div className="imageholder">
        <img src={OrigamiIntro} alt="OrigamiIntro" width="80%" />
      </div>)
}
function Image(props){
    return(
        <div className="imageinbody">
         <div className="image-description">
            <img src={props.src1} alt={props.alt1}/>
            <p>{props.description1}</p>
         </div>
         <div className="image-description">
            <img src={props.src2} alt={props.alt2}/>
            <p>{props.description2}</p>
         </div>
         </div>
    )
}
function ImageSe(props){
    return(
        <div className="imageinbody">
         <div className="image-description">
            <img src={props.src1} alt={props.alt1}/>
            <a className="highlight" href={props.Link1} target="_blank" >{props.description1}</a>
         </div>
         <div className="image-description">
            <img src={props.src2} alt={props.alt2}/>
            <a className="highlight" href={props.Link2} target="_blank">{props.description2}</a>
         </div>
         </div>
    )}
function Imagetutorial(props){
    return(
        <div className="image-description2">
                <a href="https://drive.google.com/file/d/1hpIjPH92cpjk6g047BorWxd4BRt29dVp/view?usp=sharing" target="_blank"><img src={tut4} alt="Origami Basic" width="100vh"/></a>  
                <a href="https://drive.google.com/file/d/1uP7D491pcIxbYCvPsLL1WLSMrqMprpPl/view?usp=sharing" target="_blank"><img src={tut3} alt="Origami Basic" width="100vh"/></a>
                <a href="https://drive.google.com/file/d/12clXU-AbIo38uaMhSRbBbAooti-gGy8D/view?usp=sharing" target="_blank"><img src={tut2} alt="Origami Basic" width="100vh"/></a>
                <a href="https://drive.google.com/file/d/1UxSAkYi8M_BTEcRqfqFv94bxOZz3OQmW/view?usp=sharing" target="_blank"><img src={tut1} alt="Origami Basic" width="100vh"/></a>
            </div>
    )
}

function Video(props){
    return(
        <div className="video">
        <iframe width="560" height="315" src={props.videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

function Linklist1(){
    return(
        <ol>
        <li className="linkList">
            <a className="highlight" href="https://jonakashima.com.br/" target="_blank">Jo Nakashima's Origami Page </a>

        </li>
        <li className="linkList">
            <a className="highlight" href="https://origami.me/diagrams/" target="_blank">Family-Friendly Tutorials on Origami.me</a>
        </li>
    </ol>
    )
}

function Linklist2(){
    return(
        <ol>
        <li className="linkList">
            <a class ="highlight" href="https://www.youtube.com/@OrigamiPrincess" target="_blank">Origami Princess</a>
        </li>
        <li className="linkList">
            <a className="highlight" href="https://www.youtube.com/@OrigamiTutorial/videos" target="_blank">Neil Lin Origami Tutorials</a>
        </li>
        <li className="linkList">
            <a className="highlight" href="https://www.youtube.com/@sakusaku858origami" target="_blank">Saku B Origami</a>
        </li>
        <li className="linkList">
            <a className="highlight" href="https://www.youtube.com/@kamikeyorigami/videos" target="_blank">Kamikey Origami</a>
        </li>
    </ol>
    )
}

function Linklist3(props){
    return(
        <ol>
            <li className="linkListplus">
                <a className="highlight" href="https://langorigami.com/" target="_blank">Robert Lang's Origami Page</a>
                <p className="Text">{props.des1}</p>
            </li>
            <li className="linkListplus">
                <a className="highlight" href="https://www.youtube.com/watch?v=MDwPXRy9IFc&t=62s"target="_blank">WEIRD: 11 Levels of Origami: Easy to Complex | WIRED</a>
                <p className="Text">{props.des2}</p>
            </li>
            <li className="linkListplus">
                <a className="highlight" href="https://www.youtube.com/watch?v=NYKcOFQCeno"target="_blank">TED:The math and magic of origami | Robert Lang</a>
                <p className="Text">{props.des3}</p>
            </li>
            <li className="linkListplus">
                <a className="highlight" href="https://www.youtube.com/watch?v=Q6nQ0tbsVvw"target="_blank">Origami: Art, Engineering… or Both?</a>
                <p className="Text">{props.des4}</p>
            </li>
            <li className="linkListplus">
                <a className="highlight" href="https://www.youtube.com/watch?v=3E12uju1vgQ"target="_blank">Origami in Space: BYU-designed solar arrays inspired by origami</a>
                <p className="Text">{props.des5}</p>
            </li>
            <li className="linkListplus">
                <a className="highlight" href="https://www.youtube.com/watch?v=VvR1hG3yQpo"target="_blank">Neil Katz: Origami and Architecture</a>
                <p className="Text">{props.des6}</p>
            </li>
            <li className="linkListplus">
                <a className="highlight" href="https://origamiusa.org/"target="_blank">OrigamiUSA </a>
                <p className="Text">{props.des7}</p>
            </li>
        </ol>//I guess there could be a for loop
    )
}
export {Imageholder};
export {Image};
export {ImageSe};
export {Video};
export {Linklist1};
export {Linklist2};
export {Linklist3};
export {Imagetutorial};
