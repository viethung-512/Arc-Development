import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';

// MUI stuff
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import CallToAction from '../../../commons/CallToAction';
import backArrow from '../../../../assets/backArrow.svg';
import forwardArrow from '../../../../assets/forwardArrow.svg';
import integrationAnimation from '../../../../animations/integrationAnimation/data';
import swiss from '../../../../assets/swissKnife.svg';
import access from '../../../../assets/extendAccess.svg';
import engagement from '../../../../assets/increaseEngagement.svg';

const integrationOptions = {
  loop: true,
  autoplay: true,
  animationData: integrationAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const useStyles = makeStyles(theme => ({
  mobileAppsContainer: {
    padding: '3em 5em',
    [theme.breakpoints.down('md')]: {
      padding: '1.75em 3em',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1.75em 2em',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1.5em',
    },
  },
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    position: 'absolute',
    top: '0.5em',
  },
  arrowButton: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  itemContainer: {
    maxWidth: '40em',
    marginLeft: '1em',
    marginRight: '1em',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      marginTop: '3em',
      marginBottom: '3em',
    },
  },
}));

function MobileApps({ setTabValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    init();

    // eslint-disable-next-line
  }, []);

  const init = () => {
    setTabValue(1);
    setSelectedIndex(1);
  };
  return (
    <Grid direction='column' container>
      <Grid
        item
        container
        direction='column'
        className={classes.mobileAppsContainer}
      >
        <Grid item container direction='row' style={{ marginBottom: '10em' }}>
          <Grid item container direction='column'>
            <Grid
              item
              container
              direction='row'
              style={{ marginBottom: '8em', position: 'relative' }}
              justify={matchesMD ? 'center' : 'flex-start'}
            >
              <Hidden mdDown>
                <Grid
                  item
                  className={classes.arrowContainer}
                  style={{ left: '-3em' }}
                >
                  <IconButton
                    component={Link}
                    to='/services'
                    className={classes.arrowButton}
                  >
                    <img src={backArrow} alt='Back to the custom software' />
                  </IconButton>
                </Grid>
              </Hidden>
              <Grid
                item
                container
                direction='column'
                className={classes.heading}
              >
                <Grid item>
                  <Typography
                    variant='h2'
                    gutterBottom
                    align={matchesMD ? 'center' : 'left'}
                  >
                    iOS/Android App Development
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant='body1'
                    paragraph
                    align={matchesMD ? 'center' : 'left'}
                  >
                    Mobile apps allow you to take your tools on the go.
                  </Typography>
                  <Typography
                    variant='body1'
                    paragraph
                    align={matchesMD ? 'center' : 'left'}
                  >
                    Whether you want an app for your customers, employees, or
                    yourself, we can build cross-platform native solutions for
                    any part of your business process. This opens you up to a
                    whole new world of possibilities by taking advantage of
                    phone features like the camera, GPS, push notifications, and
                    more.
                  </Typography>

                  <Typography
                    variant='body1'
                    paragraph
                    align={matchesMD ? 'center' : 'left'}
                  >
                    Convenience. Connection.
                  </Typography>
                </Grid>
              </Grid>
              <Hidden mdDown>
                <Grid
                  item
                  style={{ right: '-3em' }}
                  className={classes.arrowContainer}
                >
                  <IconButton
                    component={Link}
                    to='/mobile-apps'
                    className={classes.arrowButton}
                  >
                    <img
                      src={forwardArrow}
                      alt='Continue to Website development'
                    />
                  </IconButton>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction='row'
          style={{ marginBottom: '10em' }}
          justify='center'
        >
          <Grid
            item
            container
            direction='column'
            alignItems={matchesSM ? 'center' : 'flex-start'}
            md
            className={classes.itemContainer}
          >
            <Typography
              align={matchesSM ? 'center' : 'left'}
              variant='h4'
              gutterBottom
            >
              Integration
            </Typography>
            <Typography
              align={matchesSM ? 'center' : 'left'}
              variant='body1'
              paragraph
            >
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography
              align={matchesSM ? 'center' : 'left'}
              variant='body1'
              paragraph
            >
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>

          <Grid
            item
            container
            alignItems='center'
            justify='center'
            md
            style={
              matchesSM
                ? { marginTop: '2.5em', marginBottom: '2.5em' }
                : { marginLeft: '2.5em', marginRight: '2.5em' }
            }
          >
            <Lottie
              options={integrationOptions}
              style={{ maxHeight: 465, maxWidth: 275, minHeight: 275 }}
            />
          </Grid>

          <Grid
            item
            container
            direction='column'
            alignItems={matchesSM ? 'center' : 'flex-end'}
            md
            className={classes.itemContainer}
          >
            <Typography
              align={matchesSM ? 'center' : 'right'}
              variant='h4'
              gutterBottom
            >
              Simultaneous Platform Support
            </Typography>
            <Typography
              align={matchesSM ? 'center' : 'right'}
              variant='body1'
              paragraph
            >
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography
              align={matchesSM ? 'center' : 'right'}
              variant='body1'
              paragraph
            >
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction={matchesSM ? 'column' : 'row'}
          style={{ marginBottom: '10em' }}
          justify='center'
          alignItems={matchesSM ? 'center' : 'flex-start'}
        >
          <Grid
            item
            container
            direction='column'
            className={classes.itemContainer}
            alignItems='center'
            sm
          >
            <Typography variant='h4' gutterBottom>
              Extend Functionality
            </Typography>
            <img
              alt='Extend Functionality'
              src={swiss}
              style={{ maxWidth: '100%' }}
            />
          </Grid>

          <Grid
            item
            container
            direction='column'
            className={classes.itemContainer}
            alignItems='center'
            sm
          >
            <Typography variant='h4' gutterBottom>
              Extend Access
            </Typography>
            <img
              alt='Extend Access'
              src={access}
              style={{ maxWidth: '100%' }}
            />
          </Grid>

          <Grid
            item
            container
            direction='column'
            className={classes.itemContainer}
            alignItems='center'
            sm
          >
            <Typography variant='h4' gutterBottom>
              Increase Engagement
            </Typography>
            <img
              alt='Increase Engagement'
              src={engagement}
              style={{ maxWidth: '100%' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
}

MobileApps.propTypes = {
  setTabValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};

export default MobileApps;
