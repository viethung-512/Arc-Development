import React, { Fragment } from 'react';

// MUI stuff
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import customSoftwareIcon from '../../../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../../../assets/mobileIcon.svg';
import websiteIcon from '../../../../assets/websiteIcon.svg';
import ServiceItem from './ServiceItem';

const useStyles = makeStyles(theme => ({
  servicesContainer: {
    marginTop: '12em',
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      marginTop: '8em',
      paddingLeft: '4em',
      paddingRight: '4em',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '8em',
      paddingLeft: '1em',
      paddingRight: '1em',
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
}));

function ServicesBlock(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction='column' className={classes.servicesContainer}>
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
              title='iOS/Android App Development'
              subtitle1='Extend Functionality. Extend Access. Increase Engagement.'
              subtitle2={
                <Fragment>
                  Integrate your web experience or create a standalone app{' '}
                  {matchesSM && <br />}
                  with either mobile platform.
                </Fragment>
              }
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
              title='Website Development'
              subtitle1='Reach More. Discover More. Sell more.'
              subtitle2={
                <Fragment>
                  Optimized for Search Engines,
                  {matchesSM && <br />} built for speed.
                </Fragment>
              }
              image={websiteIcon}
              servicePath='/websites'
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

ServicesBlock.propTypes = {};

export default ServicesBlock;
