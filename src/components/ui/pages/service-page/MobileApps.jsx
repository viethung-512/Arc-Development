import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function MobileApps({ setTabValue, setSelectedIndex }) {
  useEffect(() => {
    init();

    // eslint-disable-next-line
  }, []);

  const init = () => {
    setTabValue(1);
    setSelectedIndex(2);
  };

  return <div>mobile app page</div>;
}

MobileApps.propTypes = {
  setTabValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};

export default MobileApps;
