import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Contact({ setTabValue }) {
  useEffect(() => {
    init();

    // eslint-disable-next-line
  }, []);

  const init = () => setTabValue(4);
  return <div>service page</div>;
}

Contact.propTypes = {
  setTabValue: PropTypes.func.isRequired,
};

export default Contact;
