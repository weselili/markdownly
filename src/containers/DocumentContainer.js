import { connect } from 'react-redux';
import { getDocument } from '../selectors/documentSelectors';
import Document from '../components/markdown/Document';
import { updateMarkdown } from '../actions/documentActions';

const mapStateToProps = state => ({
  markdown: getDocument(state)
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
