import {Component} from 'react';
import styles from './Dropdown.css';


export class Dropdown extends Component {
  render(){ return(
    <div style={{position: 'relative'}} className={this.props.className}>
    <div style={{display: 'flex', alignItems: 'center'}}>
      {this.props.head}
    </div>
    <div style={{display: this.props.isShow ? 'block' : 'none', position: 'absolute'}} className={this.props.childrenClassName}>
    {this.props.children}
    </div>
    
  </div>
)}} 

Dropdown.defaultProps = {
  className: 'dropsownItemsWrapper',
  childrenClassName: 'dropdownContent'
}

// export function Dropdown ({children, head, className='dropsownItemsWrapper', isShow, childrenClassName='dropdownContent'}){
 
//  return(
//   <div style={{position: 'relative'}} className={className}>
//     <div style={{display: 'flex', alignItems: 'center'}}>
//       {head}
//     </div>
//     <div style={{display: isShow ? 'block' : 'none', position: 'absolute'}} className={childrenClassName}>
//     {children}
//     </div>
    
//   </div>
//  )
// }