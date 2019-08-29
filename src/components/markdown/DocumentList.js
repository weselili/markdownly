import React from 'react';
import PropTypes from 'prop-types';

function DocumentList({ documents }) {
  const documentsElement = documents.map((document, i) => (
    <li key={i}>
      {document.i}
    </li>
  ));

  return (
    <>
      <ul>{documentsElement}</ul>
    </>
  );
}

DocumentList.propTypes = {
  documents: PropTypes.array.isRequired
};

export default DocumentList;
