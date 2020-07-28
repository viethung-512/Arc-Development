import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

// MUI stuff
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import customSoftwareIcon from '../../../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../../../assets/mobileIcon.svg';
import websiteIcon from '../../../../assets/websiteIcon.svg';
import ServiceItem from './ServiceItem';

const useStyles = makeStyles(theme => ({
  servicesContainer: {
    padding: '5em',
    [theme.breakpoints.down('sm')]: {
      padding: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1.5em',
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
}));

function ServicePage({ setTabValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    init();

    // eslint-disable-next-line
  }, []);

  const init = () => {
    setTabValue(1);
    setSelectedIndex(0);
  };

  return (
    <Grid container direction='column' className={classes.servicesContainer}>
      <Grid item>
        <Typography
          align={matchesSM ? 'center' : undefined}
          variant='h2'
          gutterBottom
        >
          Services
        </Typography>
      </Grid>

      <Grid item>
        <Grid container justify='flex-end'>
          <Grid item>
            <ServiceItem
              title='iOS/Android App Development'
              subtitle1='Extend Functionality. Extend Access. Increase Engagement.'
              subtitle2='Integrate your web experience or create a standalone app with either mobile platform.'
              image={mobileAppsIcon}
              placementFirst={false}
              servicePath='/mobile-apps'
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container justify='flex-start'>
          <Grid item>
            <ServiceItem
              title='Custom Software Development'
              subtitle1='Save Energy. Save Time. Save Money'
              subtitle2={
                <Fragment>
                  Complete digital solutions, from investigation to{' '}
                  <span className={classes.specialText}>celebration</span>
                </Fragment>
              }
              image={customSoftwareIcon}
              servicePath='/custom-software'
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container justify='flex-end'>
          <Grid item>
            <ServiceItem
              title='Website Development'
              subtitle1='Reach More. Discover More. Sell more.'
              subtitle2='Optimized for Search Engines, built for speed.'
              image={websiteIcon}
              servicePath='/websites'
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

ServicePage.propTypes = {
  setTabValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};

export default ServicePage;
