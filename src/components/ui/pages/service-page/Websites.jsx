import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Websites({ setTabValue, setSelectedIndex }) {
  useEffect(() => {
    init();

    // eslint-disable-next-line
  }, []);

  const init = () => {
    setTabValue(1);
    setSelectedIndex(3);
  };
  return <div>websites page</div>;
}

Websites.propTypes = {
  setTabValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};

export default Websites;
