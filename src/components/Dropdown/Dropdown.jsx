import React from 'react';
import styles from './Dropdown.css';

export function Dropdown ({children, head, className='dropsownItemsWrapper', isShow, childrenClassName='dropdownContent'}){
 
 return(
  <div style={{position: 'relative'}} className={className}>
    <div style={{display: 'flex', alignItems: 'center'}}>
      {head}
    </div>
    <div style={{display: isShow ? 'block' : 'none', position: 'absolute'}} className={childrenClassName}>
    {children}
    </div>
    
  </div>
 )
}