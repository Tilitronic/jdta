import { gql, ApolloClient, NormalizedCacheObject } from '@apollo/client'



export const categories = gql`
  query{
    categories{
      name
    }
  }
`
export function makeCategoryQuery(categoryName='all'){
  const category = gql`
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
  return category
}


export function makeProductQuery(productId = '') {

  const product = gql`
  query{
      product(id: "${productId}"){
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
  return product
}
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
