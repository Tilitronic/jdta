import { Attribute } from "../Attribute/Attribute"
import {Component} from "react"

export class Attributes extends Component{
    render(){
      const elementsAr = this.props.data.map((el, index) => {
        return <Attribute data={el} parentIndex={index} key={'attribute'+index}/>
      })
      return elementsAr
    }
}
// export function Attributes ({data}){

//     const elementsAr = data.map((el, index) => {
//       return <Attribute data={el} parentIndex={index} key={'attribute'+index}/>
//     })
//     return elementsAr
//   }