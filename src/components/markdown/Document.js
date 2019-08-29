import React from 'react';
import Preview from './Preview';
import Editor from './Editor';
import styles from './Document.css';
import PropTypes from 'prop-types';

function Document({ document, handleChange }) {
  return (
    <>
      <h3>{document.title}</h3>
      <div className={styles.Document}>
        <Editor markdown={document.markdown} handleChange={handleChange} />
        <Preview markdown={document.markdown} />
      </div>
    </>
  );
}

Document.propTypes = {
  document: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Document;
