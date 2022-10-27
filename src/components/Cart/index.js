import { Cart } from "./Cart";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        productsList: state.cart.productsList,
        currentCurrency: state.currency.currentCurrency,
        totalPrice: state.cart.totalPrice}
};
export default connect(mapStateToProps, null)(Cart)