import { ShowcasePage } from "./ShowcasePage";
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    return {
        currentCategory: state.category.currentCategory,
        categoryList: state.category.categoryList
    }
};
export default connect(mapStateToProps, null)(ShowcasePage)