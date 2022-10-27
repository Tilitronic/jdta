import {CartPage} from './CartPage.jsx'
import { connect } from 'react-redux';
import { decreaseAmount, increaseAmount } from '../CartPage/cartSlice.js';
const mapStateToProps = (state) => {
    return {
        productsList: state.cart.productsList,
        currentCurrency: state.currency.currentCurrency,
        totalPrice: state.cart.totalPrice
    }
};
export default connect(mapStateToProps, {decreaseAmount, increaseAmount})(CartPage);