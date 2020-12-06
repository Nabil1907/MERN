import React from 'react' ; 
import ReactDom from 'react-dom';

import './backDrop.css';
const backDrop = props =>{
    
    const content = <div className="backdrop" onClick={props.onClick}></div>
    return  ReactDom.createPortal(content,document.getElementById('backdrop-hoook'));
}
export default backDrop;