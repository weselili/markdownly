import React from 'react';
import PropTypes from 'prop-types';

function DocumentDetail({ integer, markdown }) {
  return (
    <>
      <h4>{integer}</h4>
      <p>{markdown}</p>
    </>
  );
}

DocumentDetail.propTypes = {
  markdown: PropTypes.string.isRequired,
  integer: PropTypes.number.isRequired
};

export default DocumentDetail;
