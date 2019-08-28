import React from 'react';
import Preview from './Preview';
import Editor from './Editor';
import styles from './Document.css';
import PropTypes from 'prop-types';

function Document({ markdown, handleChange }) {
  console.log(markdown);;
  return (
    <>
      <div className={styles.Document}>
        <Editor markdown={markdown} handleChange={handleChange} />
        <Preview markdown={markdown} />
      </div>
    </>
  );
}

Document.propTypes = {
  markdown: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Document;
