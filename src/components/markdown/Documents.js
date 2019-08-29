import React from 'react';
import PropTypes from 'prop-types';

function Documents({ documents }) {
  const documentElement = documents.map(document => (
    <li key={document.id}>
      {document.title}
    </li>
  ));

  return (
    <ul>{documentElement}</ul>
  );
}

Documents.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })).isRequired
};

export default Documents;
