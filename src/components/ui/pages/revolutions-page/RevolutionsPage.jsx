import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// MUI stuff
import Grid from '@material-ui/core/Grid';

import CallToAction from '../../../commons/CallToAction';
import Revolution from './Revolution';
import Progress from './Progress';

function RevolutionsPage({ setTabValue }) {
  useEffect(() => {
    init();

    // eslint-disable-next-line
  }, []);

  const init = () => setTabValue(2);
  return (
    <Grid container direction='column'>
      <Grid item>
        <Revolution />
      </Grid>
      <Grid item>
        <Progress />
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
}

RevolutionsPage.propTypes = {
  setTabValue: PropTypes.func.isRequired,
};

export default RevolutionsPage;
