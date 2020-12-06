import React,{useState} from 'react' ; 

import './PlacesItems.css';
import Card from './../../Shared/Components/UIElements/Card';
import ButtonItems from '../../Shared/Components/FormElements/ButtonItems'

// const [showMap, setShowMap] = useState(false);
// const openMapHandler = () => setShowMap(true);
// const closeMapHandler = () => setShowMap(false);

const PlacesItem = props => {
    return (
        <div class="card">
        <img src={props.image} alt={props.title} />
              <div class="container">
                     <h2><b>{props.title}</b></h2>
                     <h4>{props.address}</h4> 
                     <p>{props.desc}</p> 
               </div>
               <div className="place-buttons">
                    <ButtonItems inverse >View On Map</ButtonItems>
                    <ButtonItems to={`/place/${props.id}`}>Edit</ButtonItems>
                    <ButtonItems danger>Delete</ButtonItems>
                </div>
        </div>
    )

}
export default PlacesItem ;