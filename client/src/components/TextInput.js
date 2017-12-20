import React from 'react';

const TextInput = (props) => 
  <input type='text' 
    placeholder={ props.placeholder }
    onChange={ props.handleOnChange }
    name={ props.name }
    onKeyUp={props.handleOnKeyUp}
  />

export default TextInput