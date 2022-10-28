import {Component} from 'react'
import styles from './SmallPictures.scss'

export class SmallPictures extends Component{
  render(){
    const elementsAr = this.props.data.map((el, index) => {
      return (
        <div className='smallPicture' key={'thumbnail' + index}>
          <img src={el} alt={'Thumbnail picture of product'} onClick={() => this.props.setActiveImage(index)} />
        </div>
      )
    })
    return elementsAr
  }
}
