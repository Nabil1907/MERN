import React from 'react' ; 

import './PlacesItems.css';
import Card from './../../Shared/Components/UIElements/Card';

const PlacesItem = props => {
    return (
        <div class="card">
        <img src={props.image} alt={props.title} />
              <div class="container">
                     <h2><b>{props.title}</b></h2>
                     <h4>{props.address}</h4> 
                     <p>{props.desc}</p> 
               </div>
                <button class="label success">View On Map</button>
                <button class="label info">Edit</button>
                <button class="label danger">Delete</button>

        </div>
    )

}
export default PlacesItem ;