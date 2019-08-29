import React from 'react';
import PropTypes from 'prop-types';
import Document from './Document';

function Documents({ documents, title, markdown, }) {

  const documentList = documents.map(document => (
    <li key={document.id}>
      <Document title={title} markdown={markdown}/>
    </li>
  ));

  return (
    <ul>
      {documentList}
    </ul>
  );
}

Documents.propTypes = {
  documents: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  markdown: PropTypes.string.isRequired
};

export default Documents;
