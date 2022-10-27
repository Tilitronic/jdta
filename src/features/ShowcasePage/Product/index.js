import { Product } from "./Product";
import { connect } from 'react-redux';
import { updateProductsList } from "../../CartPage/cartSlice";

const mapStateToProps = (state) => {
    return {currentCurrency: state.currency.currentCurrency}
};

export default connect(mapStateToProps, {updateProductsList})(Product)