import {  gql } from '@apollo/client'



export const categories = gql`
  query{
    categories{
      name,
      products{
          id,
          name,
          inStock,
          gallery,
          description,
          category,
          attributes{
            id,
            name,
            type,
            items {
              displayValue,
              value,
              id
            }
          },
          prices{
              currency{
                label,
                symbol
              },
              amount
          },
          brand
      }
    }
  }
`
const categoryName='all'
export const category = gql`
query{
    category(input: { title: "${categoryName}" }){
        name,
        products{
            id,
            name,
            inStock,
            gallery,
            description,
            category,
            attributes{
                id,
                name,
                type,
                items {
                displayValue,
                value,
                id
                }
            },
            prices{
                currency{
                    label,
                    symbol
                },
                amount
            },
            brand
        }
    }
}
`

const id='654654'
export const product = gql`
query{
    product(id: "${id}"){
        id,
        name,
        inStock,
        gallery,
        description,
        category,
        attributes{
        id,
        name,
        type,
        items {
            displayValue,
            value,
            id
        }
        },
        prices{
            currency{
            label,
            symbol
            },
            amount
        },
        brand
    }
}
`

export const currencies = gql`
query{
    currencies{
        label,
        symbol
      }
}
`


// client.query({ categories })
//   .then((response) => {
//     console.log(response.data)
//   })
