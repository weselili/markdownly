import { connect } from 'react-redux';
import Documents from '../components/markdown/Documents';
import { getTitle } from '../actions/documentActions';

const mapStateToProps = state => ({
  title: getTitle(state)
});

export default connect(
  mapStateToProps
)(Documents);
