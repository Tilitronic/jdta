import { Component } from 'react';
// import { useState } from 'react'

export class Attribute extends Component{
  state = {
    selectedAttribute: 0
  };
  attributeName = this.props.data.name;
  handleClick = function(elementIndex){
    this.setState({ selectedAttribute : elementIndex });
    this.props.setSelectedAttributes(this.props.parentIndex, elementIndex);
  };

  componentDidMount(){
    this.props.setSelectedAttributes(this.props.parentIndex, 0);
  }


  render(){
    const  elementsAr = this.props.data.items.map((obj, index) => {
      const backgroundColor = this.attributeName==='Color' ? obj.value : '#ffffff';
      const className = this.state.selectedAttribute===index ? 'attributeItem selected' : 'attributeItem';
      return (
        <div className={className}  onClick={() => this.handleClick(index)} key={this.attributeName+index}>
          <div className='attributeDisplayValue'>{obj.displayValue}</div>
          <div className='attributeValue'>{obj.value}</div>
          <div className='colorAttribute' style={{ backgroundColor: backgroundColor }}></div>
        </div>
      );
    });

    const className = 'productAttribute '+ this.attributeName;
    return(
      <div className={className} key={'attribute' + this.props.parentIndex}>
        <p className='attributeName'>{this.attributeName.toUpperCase()+':'}</p>
        <div className='attributeItems'>
          {elementsAr}
        </div>
      </div>
    );
  }
}
