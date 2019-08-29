import React from 'react';
import PropTypes from 'prop-types';

function AddDoc({ title, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} name={'title'} plaeholder="title"></input>
      <button>Add Document</button>
    </form>
  );
}

AddDoc.propTypes = {
  title: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default AddDoc;
