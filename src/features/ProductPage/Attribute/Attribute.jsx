import { useState } from 'react'

export function Attribute ({data, parentIndex}){
    const [selectedAttribute, setSelectedAttribute] = useState(0)
    const attributeName = data.name
    const handleClick = function(elementIndex){
      setSelectedAttribute(elementIndex)
    }
    const elementsAr = data.items.map((obj, index)=>{
      const backgroundColor = attributeName==='Color' ? obj.value : '#ffffff'
      const className = selectedAttribute===index ? 'attributeItem selected' : 'attributeItem'
      
      
      
      return (
        <div className={className}  onClick={()=>handleClick(index)} key={attributeName+index}>
          <div className='attributeDisplayValue'>{obj.displayValue}</div>
          <div className='attributeValue'>{obj.value}</div>
          <div className='colorAttribute' style={{backgroundColor: backgroundColor}}></div>
        </div>
      )
    })
    
    const className = 'productAttribute '+attributeName
    return (
      <div className={className} key={'attribute' + parentIndex}>
        <p className='attributeName'>{attributeName.toUpperCase()+':'}</p>
        <div className='attributeItems'>
          {elementsAr}
        </div>
      </div>
    )
  
  }