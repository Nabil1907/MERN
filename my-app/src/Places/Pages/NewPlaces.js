import React from 'react' ; 

import Input from '../../Shared/Components/FormElements/Input';
import './NewPlace.css';
import {VALIDATOR_REQUIRE} from '../../Shared/Util/validators';
const Newplaces = props =>{
    
    return(
       <form className="place-form">
           <Input 
           type ="text" 
           label="Title" 
           element="input"
           validators={[VALIDATOR_REQUIRE()]}
           errorText="Please enter a valid title."
/>  

       </form>
    );
    
};
export default Newplaces;