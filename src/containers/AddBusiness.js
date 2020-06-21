import { connect } from 'react-redux';
import AddBusiness from '../components/AddBusiness'
import { addBusiness } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        addBusiness: (business) => dispatch(addBusiness(business)),
        // removeBusiness: (index) => dispatch(removeBusiness(index))
    }
}

export default connect(null, mapDispatchToProps)(AddBusiness)