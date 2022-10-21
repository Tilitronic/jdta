
import styles from './SmallPictures.scss'

export function SmallPictures({ data, setState }) {
    const elementsAr = data.map((el, index) => {
      return (
        <div className='smallPicture' key={'thumbnail' + index}>
          <img src={el} alt={'Thumbnail picture of product'} onClick={() => setState(index)} />
        </div>
      )
    })
    return elementsAr
  }