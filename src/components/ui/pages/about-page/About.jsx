import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function About({ setTabValue }) {
  useEffect(() => {
    init();

    // eslint-disable-next-line
  }, []);

  const init = () => setTabValue(3);
  return <div>service page</div>;
}

About.propTypes = {
  setTabValue: PropTypes.func.isRequired,
};

export default About;
