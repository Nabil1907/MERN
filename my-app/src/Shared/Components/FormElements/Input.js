import React ,{useReducer , useEffect} from 'react';

import {validate} from '../../Util/validators';
import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val,action.validators)
      };
    case 'TOCH':
      return{
        ...state,
        isToch:true
      }
    default:
      return state;
  }
};

  const Input = props => {
      const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue||'',
        isToch: false,
        isValid : props.initialIsValid || false
      });
      const changeHandler = event => {
        dispatch({ 
         type: 'CHANGE',
         val: event.target.value ,
          validators: props.validators });
      };
    
      const {id, onInput} = props ;
      const {value, isValid}=inputState;
      useEffect(() => {
        onInput(id, value, isValid)
      }, [id, value, isValid, onInput]);
      const tochHandler = ()=>{
        dispatch({
          type: 'TOCH',

        });
      };
      const element = 
        props.element === 'input' ? (
            <input 
            id={props.id} 
            type={props.type} 
            placeholder={props.placeholder}
            onChange={changeHandler}
            onBlur={tochHandler}
            value={inputState.value}
      /> 
        ) : (
            <textarea 
            id={props.id} 
            rows={props.rows || 3} 
            onChange={changeHandler}
            onBlur={tochHandler}
            value={inputState.value}
            
      />
        );
      

        return(
            <div className={`form-control ${!inputState.isValid && inputState.isToch &&
              'form-control--invalid'}`}>
                <label htmlFor={props.id} >
                    {props.label}
                </label>
                {element}
                {!inputState.isValid && inputState.isToch && <p>{props.errorText}</p>}
            </div>
        );
};
export default Input ; 