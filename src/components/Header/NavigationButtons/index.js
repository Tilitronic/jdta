import { NavigationButtons } from './NavigationButtons';
import { setCurrentCategory, updateCategoryList } from '../../../features/ShowcasePage/categorySlice';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    return {currentCategory: state.category.currentCategory}
};
export default connect(mapStateToProps, {setCurrentCategory, updateCategoryList})(NavigationButtons)