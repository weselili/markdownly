import { connect } from 'react-redux';
import Documents from '../components/markdown/Documents';
import { getAllTitles } from '../selectors/documentSelectors';

const mapStateToProps = state => ({
  titles: getAllTitles(state)
});

export default connect(
  mapStateToProps
)(Documents);
