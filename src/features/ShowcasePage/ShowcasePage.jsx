import React, { Component } from 'react';

// import { useQuery } from '@apollo/client';
import { client } from '../../index.js';
import { makeCategoryQuery } from '../../api/gql';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
// import { useState, useRef, useEffect } from 'react';
// import { useSelector } from 'react-redux';

import { Products } from './Products/Products';

import styles from './ShowcasePage.scss';
class ShowcasePageWithoutRouter extends Component {
  state = {
    data: null,
    currentCategory: -1
  }
  getData = function(){
    const currentCategoryIndex = this.props.currentCategory;
    const currentCategoryName = this.props.categoryList[currentCategoryIndex]?.name
    const categoryQuery = makeCategoryQuery(currentCategoryName)
    client
      .query({ query: categoryQuery })
      .then((result) => {
        this.setState({ data: result.data.category })
    })
    this.setState({currentCategory : this.props.currentCategory})
  }
  componentDidMount(){
    this.getData()
  }
  componentDidUpdate(){
    if (this.props.categoryList.length>0 && this.state.currentCategory!==this.props.currentCategory){
      this.getData()
    }
  }

  render() {
    
    if (this.state.data){
      return (
        <div className='showcaseWrapper'>
          <div className='sjowcaseElementsWrapper'>
            <div className='categoryName'>
              {this.state.data?.name.slice(0, 1).toUpperCase() + this.state.data?.name.slice(1)}
            </div>
            <div className='produtsWrapper'>
              <Products data={this.state.data.products} />
            </div>
          </div>
        </div>
      )
    } 
    return null

  }
}

export const ShowcasePage = withRouter(ShowcasePageWithoutRouter)

// export function ShowcasePage() {
//   const [activeCategory, setActiveCategory] = useState('all')
//   const shouldUseEffect = useRef(true);
//   const { loading, error, data } = useQuery(categoriesQuery)
//   const location = useLocation();
//   useEffect(() => {
//     if (shouldUseEffect.current) {
//       const pathname = location.pathname;
//       switch (pathname) {
//         case '/':
//           setActiveCategory('all')
//           break;
//         case '/tech':
//           setActiveCategory('tech')
//           break;
//         case '/clothes':
//           setActiveCategory('clothes')
//           break;
//         default:
//           setActiveCategory('all')
//           break;
//       }
//     }

//   }, [location])
//   if (loading) return 'Loading...';
//   if (error) return `Error! ${error.message}`;

//   // const  categoriesAr = data.categories.map(el=>el.name)

//   const dataToShow = data.categories.filter((obj) => obj.name === activeCategory)[0]
//   console.log("dataToShow", dataToShow);


//   return (
//     <div className='showcaseWrapper'>
//       <div className='sjowcaseElementsWrapper'>
//         <div className='categoryName'>
//           {dataToShow.name.slice(0, 1).toUpperCase() + dataToShow.name.slice(1)}
//         </div>
//         <div className='produtsWrapper'>
//           <Products data={dataToShow.products} />
//         </div>
//       </div>
//     </div>
//   )
// }
