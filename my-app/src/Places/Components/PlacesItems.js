import React,{useState} from 'react' ; 

import './PlacesItems.css';
import Card from './../../Shared/Components/UIElements/Card';
import ButtonItems from '../../Shared/Components/FormElements/ButtonItems'
import Modal from '../../Shared/Components/UIElements/modal';
import Map from '../../Shared/Components/UIElements/Map';
const PlacesItem = props => {
    const [showMap, setShowMap] = useState(false);
    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);
        return (
            <React.Fragment>
            <Modal
              show={showMap}
              onCancel={closeMapHandler}
              header={props.address}
              contentClass="place-item__modal-content"
              footerClass="place-item__modal-actions"
              footer={<ButtonItems onClick={closeMapHandler}>CLOSE</ButtonItems>}
            >
              <div className="map-container">
               <Map center={props.coordinates}  zoom={16}>

               </Map>
              </div>
            </Modal>
        <div class="card">
        <img src={props.image} alt={props.title} />
              <div class="container">
                     <h2><b>{props.title}</b></h2>
                     <h4>{props.address}</h4> 
                     <p>{props.desc}</p> 
               </div>
               <div className="place-buttons">
                    <ButtonItems inverse onClick={openMapHandler} >View On Map</ButtonItems>
                    <ButtonItems to={`/places/${props.id}`}>Edit</ButtonItems>
                    <ButtonItems danger>Delete</ButtonItems>
                </div>
        </div>
        </React.Fragment>
    );

};
export default PlacesItem ;