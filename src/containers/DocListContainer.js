import { connect } from 'react-redux';
import Documents from '../components/markdown/Documents';
import { getAllTitles, getCurrentDocument } from '../selectors/documentSelectors';
import { changeCurrentDocument } from '../actions/documentActions';

const mapStateToProps = state => ({
  titles: getAllTitles(state),
  document: getCurrentDocument(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentDocument(currentDocument) {
    dispatch(changeCurrentDocument(currentDocument));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Documents);
