import { Attribute } from "../Attribute/Attribute"

export function Attributes ({data}){

    const elementsAr = data.map((el, index) => {
      return <Attribute data={el} parentIndex={index} key={'attribute'+index}/>
    })
    return elementsAr
  }