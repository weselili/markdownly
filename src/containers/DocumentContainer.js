import { connect } from 'react-redux';
import { getMarkdown } from '../selectors/documentSelectors';
import Document from '../components/markdown/Document';
import { updateMarkdown } from '../actions/documentActions';

const mapStateToProps = state => ({
  markdown: getMarkdown(state)
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
