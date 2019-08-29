import { connect } from 'react-redux';
import Documents from '../components/markdown/Documents';
import { getTitle } from '../selectors/documentSelectors';

const mapStateToProps = state => ({
  title: getTitle(state);
});

export default connect(
  mapStateToProps
)(Documents);
