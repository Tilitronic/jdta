import Product from "../Product"
import { Component } from 'react';

export class Products extends Component{
  render(){
    const elementsAr = this.props.data.map((obj, index) => {
      return (<Product obj={obj} key={'product'+index}/>)
    })
    return elementsAr
  }
}
