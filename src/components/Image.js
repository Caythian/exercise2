import React from 'react';
import '../App.css';
import OrigamiIntro from '../Images/OrigamiIntro.jpeg';


function Imageholder (){
    return(
    <div className="imageholder">
        <img src={OrigamiIntro} alt="OrigamiIntro" width="80%" />
      </div>)
}
function ImageinBody(props){
    return(
        <div class="imageinbody">
         <div class="image-description">
            <img src={props.src} alt={props.alt}/>
            <p>{props.description}</p>
         </div>
         </div>
    )
}
function Video(props){
    return(
        <div class="video">
        <iframe width="560" height="315" src={props.videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}
export {Imageholder};
export {ImageinBody};
export {Video};
