import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function ServicePage({ setTabValue, setSelectedIndex }) {
  useEffect(() => {
    init();

    // eslint-disable-next-line
  }, []);

  const init = () => {
    setTabValue(1);
    setSelectedIndex(0);
  };

  return <div>service page</div>;
}

ServicePage.propTypes = {
  setTabValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};

export default ServicePage;
