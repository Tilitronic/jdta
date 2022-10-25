// export * from './CurrencySelectorAndCart';
import {CurrencySelectorAndCart} from './CurrencySelectorAndCart'
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    return {currentCurrency: state.currency.currentCurrency}
};

export default connect(mapStateToProps, null)(CurrencySelectorAndCart);
