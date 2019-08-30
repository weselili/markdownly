import React from 'react';
import PropTypes from 'prop-types';

function Documents({ titles, setCurrentDocument }) {
  const titleElements = titles.map((title, i) => (
    <li key={title}>
      <button onClick={() => setCurrentDocument(i)}>{title}</button>
  
    </li>
  ));

  return (
    <ul>{titleElements}</ul>
  );
}

Documents.propTypes = {
  titles: PropTypes.array.isRequired,
  setCurrentDocument: PropTypes.func.isRequired
};

export default Documents;
