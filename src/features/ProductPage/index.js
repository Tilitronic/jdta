import {ProductPage} from './ProductPage'
import { connect } from 'react-redux';
import {updateProductsList} from '../CartPage/cartSlice.js'
const mapStateToProps = (state) => {
    return {currentCurrency: state.currency.currentCurrency}
};

export default connect(mapStateToProps, {updateProductsList})(ProductPage);
