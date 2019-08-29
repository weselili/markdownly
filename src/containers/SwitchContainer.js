import { connect } from 'react-redux';
import Switch from '../components/markdown/Switch';

const mapDispatchToProps = dispatch => ({
  increment() {
    // dispatch currentDocument + 1
  },

  decrement() {
    // dispatch currentDocument -1
  }
});

export default connect(
  mapDispatchToProps
)(Switch);
