import React from 'react';
import PropTypes from 'prop-types';

function Documents({ titles }) {
  const titlesElement = titles.map(title => (
    <li key={title}>
      {title}
    </li>
  ));

  return (
    <ul>{titlesElement}</ul>
  );
}

Documents.propTypes = {
  titles: PropTypes.array.isRequired
};

export default Documents;
