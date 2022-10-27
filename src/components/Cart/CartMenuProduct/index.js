import {CartMenuProduct} from './CartMenuProduct'
import { connect } from 'react-redux';
import { decreaseAmount, increaseAmount } from '../../../features/CartPage/cartSlice';
const mapStateToProps = (state) => {
    return {
        currentCurrency: state.currency.currentCurrency,
    }
};
export default connect(mapStateToProps, {decreaseAmount, increaseAmount})(CartMenuProduct);
