import React from 'react';
import PropTypes from 'prop-types';
import Document from './Document';

function Documents({ documents }) {

  const documentList = documents.map(document => (
    <li key={document.id}>
      <Document title={document.title}/>
    </li>
  ));

  return (
    <ul>
      {documentList}
    </ul>
  );
}

Documents.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    markdown: PropTypes.string.isRequired
  })).isRequired,
};

export default Documents;
