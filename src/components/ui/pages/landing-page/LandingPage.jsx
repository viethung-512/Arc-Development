import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// MUI stuff
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import HeroBlock from './HeroBlock';
import ServicesBlock from './ServicesBlock';
import RevolutionsBlock from './RevolutionsBlock';
import InformationBlock from './InformationBlock';
import CallToActionBlock from '../../../commons/CallToAction';

// const useStyles = makeStyles(theme => ({}));

function LandingPage({ setTabValue }) {
  // const classes = useStyles();
  useEffect(() => {
    init();

    // eslint-disable-next-line
  }, []);

  const init = () => setTabValue(0);

  return (
    <Grid container direction='column'>
      <Grid item>
        <HeroBlock />
      </Grid>
      <Grid item>
        <ServicesBlock />
      </Grid>
      <Grid item>
        <RevolutionsBlock />
      </Grid>
      <Grid item>
        <InformationBlock />
      </Grid>
      <Grid item>
        <CallToActionBlock />
      </Grid>
    </Grid>
  );
}

LandingPage.propTypes = {
  setTabValue: PropTypes.func.isRequired,
};

export default LandingPage;
