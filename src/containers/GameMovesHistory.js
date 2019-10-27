import MovesHistory from '../components/MovesHistory';
import {connect} from 'react-redux';
import {newstepNumber, newnextPlayer} from '../actions/actions';

const mapStateToProps = state => ({
    stepNumber: state.stepNumber,
    history: state.history,
    sortAscend: state.sortAscend
});

const mapDispatchToProps = dispatch => ({
    onClick: move => {
      dispatch(newstepNumber(move));
      dispatch(newnextPlayer(move % 2 === 0));
    }
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovesHistory);