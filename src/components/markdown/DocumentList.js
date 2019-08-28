import React from 'react';
import PropTypes from 'prop-types';
import DocumentDetail from './DocumentDetail';

function DocumentList({ documents }) {
  const documentsElement = documents.map((document, i) => (
    <li key={i}>
      <DocumentDetail markdown={document.markdown} integer={i}/>
    </li>
  ));

  return (
    <>
      <ul>{documentsElement}</ul>
    </>
  );
}

DocumentList.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.shapeOf({
    integer: PropTypes.number.isRequired,
    markdown: PropTypes.string.isRequired
  })).isRequired
};

export default DocumentList;
