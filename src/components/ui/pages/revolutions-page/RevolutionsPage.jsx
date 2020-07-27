import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function RevolutionsPage({ setTabValue }) {
  useEffect(() => {
    init();

    // eslint-disable-next-line
  }, []);

  const init = () => setTabValue(2);
  return <div>Revolution page</div>;
}

RevolutionsPage.propTypes = {
  setTabValue: PropTypes.func.isRequired,
};

export default RevolutionsPage;
