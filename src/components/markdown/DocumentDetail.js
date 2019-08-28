import React from 'react';
import PropTypes from 'prop-types';

function DocumentDetail({ integer, markdown }) {
  return (
    <>
      <h1>{integer}</h1>
      <p>{markdown}</p>
  </>
  );
}

DocumentDetail.propTypes = {
  markdown: PropTypes.string.isRequired,
  integer: PropTypes.number.isRequired
};

export default DocumentDetail;
