import { connect } from 'react-redux';
import DocumentDetail from '../components/markdown/DocumentDetail';
import { getMarkdown } from '../selectors/documentSelectors';

const mapStateToProps = state => ({
  markdown: getMarkdown(state)
});

export default connect(
  mapStateToProps
)(DocumentDetail);
