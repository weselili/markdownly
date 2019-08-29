import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddDoc({ handleSubmit }) {
  const [title, updateTitle] = useState('');

  return (
    <form onSubmit={(event) => handleSubmit(event, title)}>
      <input onChange={({ target }) => updateTitle(target.value)} type="text" value={title} name="title" placeholder="title"></input>
      <button>Add Document</button>
    </form>
  );
}

AddDoc.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default AddDoc;
