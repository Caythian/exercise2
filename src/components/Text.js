import React from 'react';
import '../App.css';
export default function Text(props){
    return(
    <div className="Text">
        <p className="intro">
          {props.Text}</p>
    </div>
      );
}
function Intro(props){
    <div className="Text">
        <p className="intro">{props.intro}</p>
    </div>
}
function Subt(props){
    <div className="Text">
        <p className="subt">{props.subt}</p>
    </div>
}
function Body(props){
    <div className="Text">
        <p className="body">{props.body}</p>
    </div>
}

export {Intro}
export {Subt}
export {Body}