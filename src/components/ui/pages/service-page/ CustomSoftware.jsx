import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function CustomSoftware({ setTabValue, setSelectedIndex }) {
  useEffect(() => {
    init();

    // eslint-disable-next-line
  }, []);

  const init = () => {
    setTabValue(1);
    setSelectedIndex(1);
  };
  return <div>custom-software page</div>;
}

CustomSoftware.propTypes = {
  setTabValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};

export default CustomSoftware;
