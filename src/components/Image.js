import React from 'react';
import '../App.css';
import OrigamiIntro from '../Images/OrigamiIntro.jpeg';


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
    )
}
function Video(props){
    return(
        <div className="video">
        <iframe width="560" height="315" src={props.videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}
export {Imageholder};
export {Image};
export {ImageSe};
export {Video};
