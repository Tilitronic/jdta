import { Attribute } from '../Attribute/Attribute';
import { Component } from 'react';

export class Attributes extends Component{
  render(){
    const elementsAr = this.props.data.map((el, index) => {
      return <Attribute
        data={el}
        parentIndex={index}
        key={'attribute'+index}
        state={this.props.state}
        setSelectedAttributes={this.props.setSelectedAttributes}
      />;
    });
    return elementsAr;
  }
}
