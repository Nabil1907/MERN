import React,{useState} from 'react' ; 

import './PlacesItems.css';
import Card from './../../Shared/Components/UIElements/Card';
import ButtonItems from '../../Shared/Components/FormElements/ButtonItems'
import Modal from '../../Shared/Components/UIElements/modal';
import Map from '../../Shared/Components/UIElements/Map';
const PlacesItem = props => {
    const [showMap, setShowMap] = useState(false);
    const [showConfirmModel,setShowConfirmModel] = useState(false);
    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);
    const showDeleteWarning =() =>{
      setShowConfirmModel(true) ;
    }
    const cacelDelete = () =>{
      setShowConfirmModel(false);
    }
    const confirmDelete = () =>{
      setShowConfirmModel(false);
      console.log('Deleting');
    }
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
            <Modal
            show={showConfirmModel}
            onCancel={cacelDelete}
             header="Are You Sure ?"
             footerClass="place-item__modal-actions"
             footer={
               <React.Fragment>
                 <ButtonItems inverse onClick={cacelDelete}>CLOSE</ButtonItems>
                 <ButtonItems danger onClick={confirmDelete}>DELETE</ButtonItems> 
               </React.Fragment>
             }

            >
              <p>
                Do you Sure delete this place ? please note this can't be undone there after . 
              </p>
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
                    <ButtonItems danger onClick={showDeleteWarning} >Delete</ButtonItems>
                </div>
        </div>
        </React.Fragment>
    );

};
export default PlacesItem ;