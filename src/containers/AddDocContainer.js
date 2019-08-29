import { connect } from 'react-redux';
import AddDoc from '../components/markdown/AddDoc';
import { getTitle } from '../selectors/documentSelectors';

const mapStateToProps = state => ({
  title: getTitle(state)
});


export default connect(
  mapStateToProps
)(AddDoc);