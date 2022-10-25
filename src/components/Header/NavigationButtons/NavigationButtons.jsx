import { Component } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { client } from '../../../index.js';
import { categories as categoriesQuery } from '../../../api/gql';



import styles from './NavigationButtons.scss'

class NavigationButtonsWithoutRouter extends Component {
  state = {
    categories : []
  }
  handleClick(index, name) {
    this.props.setCurrentCategory(index)
    if (this.props.history.location.pathname!=='/'){
      this.props.history.push('/')
    }    
  }
  componentDidMount(){
    this.props.setCurrentCategory(0)
    client
      .query({ query: categoriesQuery })
      .then((result) => {
        const  categoriesAr = result.data.categories.map(el=>{return{name: el.name}})
        this.setState({categories : categoriesAr})
        this.props.updateCategoryList(categoriesAr)      
      })
    }
  

  render() {
    if (this.state.categories.length>0){
      const  elementsAr = this.state.categories.map((obj, index) => {
        const currentCategory = this.props.currentCategory
        return (
          <div className='navButtonWrapper' key={'headerNavButon' + index}>
            <button 
              key={obj.name + 'NavButon'} 
              className={index === currentCategory ? 'active navButton' : 'navButton'} 
              onClick={() => this.handleClick(index, obj.name)}
            >
              <span>{obj.name.toUpperCase()}</span>
            </button>
            <div className={index === currentCategory ? 'navButtonUnderline' : ''}></div>
          </div>
    
        )
      })
      return (
          elementsAr
      )
    } else{
      return
    }

  }
}

export const NavigationButtons = withRouter(NavigationButtonsWithoutRouter)

// export function NavigationButtons() {
//   const shouldUseEffect = useRef(true);
//   const [activeButton, setActiveButton] = useState('all')
//   const navigate = useNavigate();

    // const locations = [
    //   {
    //     pathname: '/',
    //     name: 'all'
    //   },
    //   {
    //     pathname: '/tech',
    //     name: 'tech'
    //   },
    //   {
    //     pathname: '/clothes',
    //     name: 'clothes'
    //   },
    // ]

//   function handleClick(pathname, name) {
//     navigate(pathname)
//     setActiveButton(name)
//   }

//   const location = useLocation();
//   useEffect(() => {
//     if (shouldUseEffect.current) {
//       const pathname = location.pathname;
//       switch (pathname) {
//         case '/':
//           setActiveButton('all')
//           break;
//         case '/tech':
//           setActiveButton('tech')
//           break;
//         case '/clothes':
//           setActiveButton('clothes')
//           break;
//         default:
//           setActiveButton('all')
//           break;
//       }
//     }

//   }, [location])
//   const elementsAr = locations.map((obj, index) => {
//     return (
//       <div className='navButtonWrapper' key={'headerNavButon' + index}>
//         <button key={obj.name + 'NavButon'} className={obj.name === activeButton ? 'active navButton' : 'navButton'} onClick={() => handleClick(obj.pathname, obj.name)}>
//           <span>{obj.name.toUpperCase()}</span>
//         </button>
//         <div className={obj.name === activeButton ? 'navButtonUnderline' : ''}></div>
//       </div>

//     )
//   })
//   return elementsAr
// }