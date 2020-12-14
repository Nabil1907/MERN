import React from 'react';

import './PlacesList.css';
import PlacesItem from './PlacesItems';
import Card from '../../Shared/Components/UIElements/Card';
import Button from '../../Shared/Components/FormElements/ButtonItems';
const PlacesList = props =>{
    if (props.items.length === 0) {
        return (
            <div className="place-list center">
                <Card>
                    <h2>
                        No Place Found. May be Create One? 
                    </h2>
                    <Button to='/places/new' className="center">
                        Share Your Place ! 
                    </Button>
                </Card>
            </div>

        );
    }
    return (
        <ul className="place-list">
        {props.items.map(place => (
          <PlacesItem
            key={place.id}
            id={place.id}
            image={place.image}
            title={place.title}
            desc={place.desc}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
          />
        ))}
      </ul>
        );

    
};
export default PlacesList;