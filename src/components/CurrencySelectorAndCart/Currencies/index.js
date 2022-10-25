import {Currencies} from './Currencies';
import { setCurrentCurrency } from '../currencySlice';
import { connect } from 'react-redux';

export default connect(null, {setCurrentCurrency})(Currencies)