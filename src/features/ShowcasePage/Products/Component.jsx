import { Product } from "../Product/Product"

export function Products({ data }) {

    const elementsAr = data.map((obj) => {
      return (<Product obj={obj} />)
    })
    return elementsAr
  }