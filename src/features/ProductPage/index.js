import {ProductPage} from './ProductPage'
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    return {currentCurrency: state.currency.currentCurrency}
};

export default connect(mapStateToProps, null)(ProductPage);
