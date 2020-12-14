import React from 'react' ;
import {useParams} from 'react-router-dom';

import Input from '../../Shared/Components/FormElements/Input';
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../Shared/Util/validators';
import Button from '../../Shared/Components/FormElements/ButtonItems';
import './NewPlace.css';
import {useForm} from '../../Shared/Hooks/formHooks';

const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u1'
    },
    {
      id: 'p2',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u2'
    }
  ];
const UpdatePlace = () =>{
    const placeId = useParams().placeId ; 
    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);
    const [formState, inputHandler] = useForm({
        title : {
            value : identifiedPlace.title ,
            isValid:true
        },
        description : {
            value : identifiedPlace.description ,
            isValid:true
        },
        address : {
            value : identifiedPlace.address ,
            isValid:true
        }
    },true)
    const placeUpdateSubmitHandler = event => {
      event.preventDefault();
      console.log(formState.inputs);
    };
    if(!identifiedPlace){
        return(
            <div className="center">
                <h1> Not Found ! </h1>
            </div>
        );
    };
    
    return(
        
        <form className="place-form"  onSubmit={placeUpdateSubmitHandler} >
            <Input 
           id="title"
           type ="text" 
           label="Title" 
           element="input"
           validators={[VALIDATOR_REQUIRE()]}
           errorText="Please enter a valid title."
           onInput={inputHandler}
           initialValue={formState.inputs.title.value}
           initialIsValid={formState.inputs.title.isValid}
/>  
            <Input 
           id="description"
           type ="text" 
           label="Description" 
           element="input"
           validators={[VALIDATOR_MINLENGTH(5)]}
           errorText="Please enter a valid description."
           onInput={inputHandler}
           initialValue={formState.inputs.description.value}
           initialIsValid={formState.inputs.description.isValid}
/>  
            <Input 
           id="address"
           type ="textarea" 
           label="Adress" 
           element="input"
           validators={[VALIDATOR_REQUIRE()]}
           errorText="Please enter a valid Description (at least five characters)."
           onInput={inputHandler}
           initialValue={formState.inputs.address.value}
           initialIsValid={formState.inputs.address.isValid}
/>  
        <Button  type="submit" disabled={!formState.isValid}>
                Update Place       
        </Button>
        </form>
    )
}
export default UpdatePlace ;