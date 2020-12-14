import React from 'react' ; 

import Button from '../../Shared/Components/FormElements/ButtonItems';
import Input from '../../Shared/Components/FormElements/Input';
import './NewPlace.css';
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../Shared/Util/validators';
import {useForm} from '../../Shared/Hooks/formHooks';

const Newplaces = () =>{
  const [formState,inputHandler] =useForm( {
    title: {
      value: '',
      isValid: false
    },
    description: {
      value: '',
      isValid: false
    }
    ,
    address: {
      value: '',
      isValid: false
    }
  }, false );
    
   
    const onSubmitHandler  = event =>{
        event.preventDefault();
        console.log(formState.inputs
            )
    }
    return(
       <form className="place-form" onSubmit={onSubmitHandler}>
           <Input 
           id="title"
           type ="text" 
           label="Title" 
           element="input"
           validators={[VALIDATOR_REQUIRE()]}
           errorText="Please enter a valid title."
           onInput={inputHandler}
/>   
            <Input 
            id="description"
           type ="text" 
           label="Descripition" 
           element="texterea"
           validators={[VALIDATOR_MINLENGTH(5)]}
           errorText="Please enter a valid Description (at least five characters)."
           onInput={inputHandler}
/>  
<Input 
           id="address"
           type ="text" 
           label="Adress" 
           element="input"
           validators={[VALIDATOR_REQUIRE()]}
           errorText="Please enter a valid Adress."
           onInput={inputHandler}
/>   
            <Button 
            type='submit'
            disabled={!formState.isValid}
            >
                Add Place
            </Button>
       </form>
    );
    
};
export default Newplaces;