import { Component } from 'react';
import { currencies as currenciesQuery } from '../../../api/gql.js'
import { client } from '../../../index.js';

import   './Currencies.scss'

export class Currencies extends Component {
    state = {data: null}
    handleClick = function (currency) {
        this.props.setCurrentCurrency(currency)
        this.props.handleCurrencyClick()
      }
    componentDidMount (){
        client
        .query({query: currenciesQuery})
        .then ((result)=>{
            const currenciesElements = result.data.currencies.map((el, index) => {
                return (
                  <div key={'currency' + index} className='currencyUnitWrapper'>
                    <div className='currencyUnit' onClick={() => this.handleClick(el.symbol)}>
                      <div>
                        {el.symbol}
                      </div>
                      <div>
                        {el.label}
                      </div>
                    </div>
                  </div>
                )
              });
              this.setState({data: currenciesElements})
        })
    }
    
    
  
    render(){ return(
        <div>
            {this.state.data}
        </div>
  )}} 

// export const Currencies =forwardRef(({ handleCurrencyClick }, ref)=> {
//     const dispatch = useDispatch()
  
//     const handleClick = function (currency) {
//       dispatch(setCurrentCurrency(currency))
//       handleCurrencyClick()
//     }
  
//     const { loading, error, data } = useQuery(currenciesQuery)
//     if (loading) return 'Loading...';
//     if (error) return `Error! ${error.message}`;
  
//     const currenciesElements = data.currencies.map((el, index) => {
//       return (
//         <div key={'currency' + index} className='currencyUnitWrapper'>
//           <div className='currencyUnit' onClick={() => handleClick(el.symbol)}>
//             <div>
//               {el.symbol}
//             </div>
//             <div>
//               {el.label}
//             </div>
//           </div>
//         </div>
//       )
//     })
//     return (
//       <div ref={ref}>
//         {currenciesElements}
//       </div>
//     )
//   })