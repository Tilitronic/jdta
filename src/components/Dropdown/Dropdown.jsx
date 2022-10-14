import React from 'react';
import {ReactComponent as Arow} from '../../resources/icons/arrow.svg'
import { useState } from 'react';

import styles from './Dropdown.css';


export function Dropdown({children, head}){
  const [display, setDisplay] = useState(false)
  function handleClick(){
    setDisplay(!display)
  }
 return(
  <div>
    <div onClick={handleClick} style={{display: 'flex', alignItems: 'center'}}>
      {head}{<Arow/>}
    </div>
    <div style={{display: display ? 'block' : 'none'}}>
    {children}
    </div>
    
  </div>
 )
}