import React from 'react';
import PropTypes from 'prop-types';

function DocumentList({ documents }) {
  const documentsElement = documents.map((document, i) => (
    <li key={i}>
      {/* document item element will go here  */}
    </li>
  ));

  return (
    <>
      <ul>{documentsElement}</ul>
    </>
  );
}

DocumentList.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default DocumentList;
