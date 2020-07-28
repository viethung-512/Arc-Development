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
import lightBulb from '../../../../assets/bulb.svg';
import cash from '../../../../assets/cash.svg';
import stopWatch from '../../../../assets/stopwatch.svg';
import roots from '../../../../assets/root.svg';
import documentAnimation from '../../../../animations/documentsAnimation/data';
import scaleAnimation from '../../../../animations/scaleAnimation/data';
import automationAnimation from '../../../../animations/automationAnimation/data';
import uxAnimation from '../../../../animations/uxAnimation/data';

const documentOptions = {
  loop: true,
  autoplay: true,
  animationData: documentAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const scaleOptions = {
  loop: true,
  autoplay: true,
  animationData: scaleAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const automationOptions = {
  loop: true,
  autoplay: true,
  animationData: automationAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const uxOptions = {
  loop: true,
  autoplay: true,
  animationData: uxAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const useStyles = makeStyles(theme => ({
  customSoftwareContainer: {
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
}));

function CustomSoftware({ setTabValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
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
        className={classes.customSoftwareContainer}
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
                    <img src={backArrow} alt='Back to the services' />
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
                    Custom Software Development
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant='body1'
                    paragraph
                    align={matchesMD ? 'center' : 'left'}
                  >
                    Whether we’re replacing old software or inventing new
                    solutions, Arc Development is here to help your business
                    tackle technology.
                  </Typography>
                  <Typography
                    variant='body1'
                    paragraph
                    align={matchesMD ? 'center' : 'left'}
                  >
                    Using regular commercial software leaves you with a lot of
                    stuff you don’t need, without some of the stuff you do need,
                    and ultimately controls the way you work. Without using any
                    software at all you risk falling behind competitors and
                    missing out on huge savings from increased efficiency.
                  </Typography>

                  <Typography
                    variant='body1'
                    paragraph
                    align={matchesMD ? 'center' : 'left'}
                  >
                    Our custom solutions are designed from the ground up with
                    your needs, wants, and goals at the core. This collaborative
                    process produces finely tuned software that is much more
                    effective at improving your workflow and reducing costs than
                    generalized options.
                  </Typography>
                  <Typography
                    variant='body1'
                    paragraph
                    align={matchesMD ? 'center' : 'left'}
                  >
                    We create exactly what you what, exactly how you want it.
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
                      alt='Continue to Mobile app development'
                    />
                  </IconButton>
                </Grid>
              </Hidden>
            </Grid>
            <Grid item container direction='row' justify='center'>
              <Grid
                sm
                item
                container
                direction='column'
                alignItems='center'
                style={matchesXS ? undefined : { maxWidth: '15em' }}
              >
                <Grid item>
                  <Typography variant='h4' gutterBottom>
                    Save Energy
                  </Typography>
                </Grid>
                <Grid item>
                  <img alt='Save energy' src={lightBulb} />
                </Grid>
              </Grid>

              <Grid
                sm
                item
                container
                direction='column'
                alignItems='center'
                style={
                  matchesXS
                    ? { marginTop: '4em', marginBottom: '4em' }
                    : { maxWidth: '15em' }
                }
              >
                <Grid item>
                  <Typography variant='h4' gutterBottom>
                    Save Time
                  </Typography>
                </Grid>
                <Grid item>
                  <img alt='Save Time' src={stopWatch} />
                </Grid>
              </Grid>

              <Grid
                sm
                item
                container
                direction='column'
                alignItems='center'
                style={matchesXS ? undefined : { maxWidth: '15em' }}
              >
                <Grid item>
                  <Typography variant='h4' gutterBottom>
                    Save Money
                  </Typography>
                </Grid>
                <Grid item>
                  <img alt='Save Money' src={cash} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction='column'
          style={{ marginBottom: '10em' }}
        >
          <Grid item container direction='row'>
            <Grid
              item
              container
              direction='column'
              md
              style={{ marginBottom: 24 }}
            >
              <Grid item>
                <Typography
                  gutterBottom
                  align={matchesSM ? 'center' : undefined}
                  variant='h4'
                >
                  Digital Documents & Data
                </Typography>
              </Grid>

              <Grid item container direction='row' style={{ flex: 1 }}>
                <Grid
                  item
                  md
                  style={
                    matchesSM
                      ? undefined
                      : { maxWidth: '40em', marginBottom: 16 }
                  }
                >
                  <Typography
                    variant='body1'
                    paragraph
                    align={matchesSM ? 'center' : undefined}
                  >
                    Reduce Errors. Reduce Waste. Reduce Costs.
                  </Typography>

                  <Typography
                    variant='body1'
                    paragraph
                    align={matchesSM ? 'center' : undefined}
                  >
                    Billions are spent annually on the purchasing, printing, and
                    distribution of paper. On top of the massive environmental
                    impact this has, it causes harm to your bottom line as well.
                  </Typography>

                  <Typography
                    variant='body1'
                    paragraph
                    align={matchesSM ? 'center' : undefined}
                  >
                    By utilizing digital forms and documents you can remove
                    these obsolete expenses, accelerate your communication, and
                    help the Earth.
                  </Typography>
                </Grid>

                <Grid item container justify='center' alignItems='center' md>
                  <Grid item>
                    <Lottie
                      options={documentOptions}
                      style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item container direction='column' md>
              <Grid item>
                <Typography
                  gutterBottom
                  variant='h4'
                  align={matchesSM ? 'center' : 'right'}
                >
                  Scale
                </Typography>
              </Grid>

              <Grid item container direction='row-reverse' style={{ flex: 1 }}>
                <Grid
                  item
                  md
                  style={
                    matchesSM
                      ? undefined
                      : { maxWidth: '40em', marginBottom: 16 }
                  }
                >
                  <Typography
                    variant='body1'
                    paragraph
                    align={matchesSM ? 'center' : 'right'}
                  >
                    Whether you’re a large brand, just getting started, or
                    taking off right now, our application architecture ensures
                    pain-free growth and reliability.
                  </Typography>
                </Grid>

                <Grid item container justify='center' alignItems='center' md>
                  <Grid item>
                    <Lottie
                      options={scaleOptions}
                      style={{ maxHeight: 325, maxWidth: 275, minHeight: 275 }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction='row'
            justify='center'
            alignItems='center'
            style={{ marginTop: '10em' }}
          >
            <Grid item container direction='column-reverse' alignItems='center'>
              <Grid
                item
                container
                direction='column'
                alignItems='center'
                style={{ maxWidth: '40em' }}
              >
                <Typography variant='h4' align='center'>
                  Root-Cause Analysis
                </Typography>
                <Typography variant='body1' paragraph align='center'>
                  Many problems are merely symptoms of larger, underlying
                  issues.
                </Typography>
                <Typography variant='body1' paragraph align='center'>
                  We can help you thoroughly examine all areas of your business
                  to develop a holistic plan for the most effective
                  implementation of technology.
                </Typography>
              </Grid>

              <Grid
                item
                container
                direction='column'
                alignItems='center'
                justify='center'
              >
                <img
                  alt='tree with roots extending out'
                  src={roots}
                  style={{ maxWidth: '40em', maxHeight: '40em' }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container direction='row' style={{ marginBottom: '10em' }}>
          <Grid
            item
            container
            direction='column'
            md
            style={{ marginBottom: 24 }}
          >
            <Grid item>
              <Typography
                gutterBottom
                align={matchesSM ? 'center' : undefined}
                variant='h4'
              >
                Automation
              </Typography>
            </Grid>

            <Grid item container direction='row' style={{ flex: 1 }}>
              <Grid
                item
                md
                style={
                  matchesSM ? undefined : { maxWidth: '40em', marginBottom: 16 }
                }
              >
                <Typography
                  variant='body1'
                  paragraph
                  align={matchesSM ? 'center' : undefined}
                >
                  Why waste time when you don’t have to?
                </Typography>

                <Typography
                  variant='body1'
                  paragraph
                  align={matchesSM ? 'center' : undefined}
                >
                  We can help you identify processes with time or event based
                  actions which can now easily be automated.
                </Typography>

                <Typography
                  variant='body1'
                  paragraph
                  align={matchesSM ? 'center' : undefined}
                >
                  Increasing efficiency increases profits, leaving you more time
                  to focus on your business, not busywork
                </Typography>
              </Grid>

              <Grid
                item
                container
                justify='center'
                alignItems='center'
                md
                style={{ marginBottom: '10em' }}
              >
                <Grid item>
                  <Lottie
                    options={automationOptions}
                    style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item container direction='column' md>
            <Grid item>
              <Typography
                gutterBottom
                variant='h4'
                align={matchesSM ? 'center' : 'right'}
              >
                User Experience Design
              </Typography>
            </Grid>

            <Grid item container direction='row-reverse' style={{ flex: 1 }}>
              <Grid
                item
                md
                style={
                  matchesSM ? undefined : { maxWidth: '40em', marginBottom: 16 }
                }
              >
                <Typography
                  variant='body1'
                  paragraph
                  align={matchesSM ? 'center' : 'right'}
                >
                  A good design that isn’t usable isn’t a good design.
                </Typography>

                <Typography
                  variant='body1'
                  paragraph
                  align={matchesSM ? 'center' : 'right'}
                >
                  So why are so many pieces of software complicated, confusing,
                  and frustrating?
                </Typography>

                <Typography
                  variant='body1'
                  paragraph
                  align={matchesSM ? 'center' : 'right'}
                >
                  By prioritizing users and the real ways they interact with
                  technology we’re able to develop unique, personable
                  experiences that solve problems rather than create new ones.
                </Typography>
              </Grid>

              <Grid item container justify='center' alignItems='center' md>
                <Grid item>
                  <Lottie
                    options={uxOptions}
                    style={{ maxHeight: 465, maxWidth: 275, minHeight: 275 }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
}

CustomSoftware.propTypes = {
  setTabValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};

export default CustomSoftware;
