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
export function Intro(props){
    return(
    <div className="Text">
        <p className="intro">{props.intro}</p>
    </div>
    )}
export function Subt(props){
    return(
    <div className="Text">
        <p className="subt">{props.subt}</p>
    </div>
)}
export function Body(props){
    return (<div className="Text">
        <p className="body">{props.children}</p>
    </div>)
}

