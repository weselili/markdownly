import { connect } from 'react-redux';
import { getCurrentDocument } from '../selectors/documentSelectors';
import Document from '../components/markdown/Document';
import { updateMarkdown } from '../actions/documentActions';

const mapStateToProps = state => ({
  document: getCurrentDocument(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(updateMarkdown(target.value));
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Document);
