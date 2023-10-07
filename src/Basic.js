import './App.css';

function Title(){
    return <div className="headbar">
    <h1 className="header">Origami: <span className="header2">More than What You Think</span></h1>
  </div>
}
export default Title;
 
function Menu(){
    <div className="menu-icon" onClick={menupop}>
            <img src={'/Images/bars-solid.svg'} width="2%" alt="Menu Icon" />
        </div>
        <div className="menu" id="menu">
            <li><a href="HOME.html">Home</a></li>
            <li><a href="CUL.html">Origami as a Culture</a></li>
            <li><a href="TUTORIAL.html">Tutorial</a></li>
            <li><a href="REC.html">Virtual Archive</a></li>
        </div>
}