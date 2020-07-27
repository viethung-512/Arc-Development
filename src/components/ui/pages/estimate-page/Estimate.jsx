import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Estimate({ setTabValue }) {
  useEffect(() => {
    init();

    // eslint-disable-next-line
  }, []);

  const init = () => setTabValue(5);
  return <div>service page</div>;
}

Estimate.propTypes = {
  setTabValue: PropTypes.func.isRequired,
};

export default Estimate;
