import { connect } from 'react-redux'
import { addCount, minusCount, resetCount } from '../redux/action/count'
import Count from './Count'


const mapStateToProps = state => {
    return {
        num: state.num
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAdd: () => dispatch(addCount()),
        onMinus: () => dispatch(minusCount()),
        onReset: () => dispatch(resetCount())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Count)