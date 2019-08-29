import { connect } from 'react-redux';
import Documents from '../components/markdown/Documents';
import { updateTitle } from '../actions/documentActions';

const mapStateToProps = state => ({
  title: updateTitle(state)
});

export default connect(
  mapStateToProps
)(Documents);
