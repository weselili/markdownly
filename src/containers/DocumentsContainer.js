import { connect } from 'react-redux';
import Documents from '../components/markdown/Documents';
import { getDocuments } from '../selectors/documentSelectors';

const mapStateToProps = state => ({
  documents: getDocuments(state)
});

export default connect(
  mapStateToProps
)(Documents);
