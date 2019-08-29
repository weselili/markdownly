import { connect } from 'react-redux';
import AddDoc from '../components/markdown/AddDoc';
import { createDocument } from '../actions/documentActions';

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, title) {
    event.preventDefault();
    dispatch(createDocument(title));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddDoc);
