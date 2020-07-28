import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
import analytics from '../../../../assets/analytics.svg';
import seo from '../../../../assets/seo.svg';
import outreach from '../../../../assets/outreach.svg';
import ecommerce from '../../../../assets/ecommerce.svg';

const useStyles = makeStyles(theme => ({
  websitesContainer: {
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

function Websites({ setTabValue, setSelectedIndex }) {
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
    setSelectedIndex(3);
  };
  return (
    <Grid container direction='column'>
      <Grid
        item
        container
        direction='column'
        className={classes.websitesContainer}
      >
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
                  to='/mobile-apps'
                  className={classes.arrowButton}
                >
                  <img src={backArrow} alt='Back to the mobile apps' />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item container direction='column' className={classes.heading}>
              <Grid item>
                <Typography
                  variant='h2'
                  gutterBottom
                  align={matchesMD ? 'center' : 'left'}
                >
                  Website Development
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  paragraph
                  align={matchesMD ? 'center' : 'left'}
                >
                  Having a website is a necessity in today’s business world.
                  They give you one central, public location to let people know
                  who you are, what you do, and why you’re the best at it.
                </Typography>
                <Typography
                  variant='body1'
                  paragraph
                  align={matchesMD ? 'center' : 'left'}
                >
                  From simply having your hours posted to having a full fledged
                  online store, making yourself as accessible as possible to
                  users online drives growth and enables you to reach new
                  customers.
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
                  to='/services'
                  className={classes.arrowButton}
                >
                  <img src={forwardArrow} alt='forward to the services' />
                </IconButton>
              </Grid>
            </Hidden>
          </Grid>

          <Grid
            item
            container
            direction='row'
            style={{ marginBottom: '8em' }}
            justify={matchesMD ? 'center' : 'flex-start'}
          >
            <Grid
              item
              container
              direction='column'
              justify='center'
              className={classes.itemContainer}
            >
              <Grid item>
                <Typography
                  variant='h4'
                  gutterBottom
                  align={matchesSM ? 'center' : 'left'}
                >
                  Analytics
                </Typography>
              </Grid>

              <Grid
                item
                container
                direction='row'
                justify='center'
                alignItems='center'
              >
                <Grid
                  item
                  md
                  style={matchesMD ? undefined : { marginLeft: '-3em' }}
                >
                  <img
                    src={analytics}
                    alt="graph with magnifying glass revealing 1's and 0's"
                    style={{ width: '20em' }}
                  />
                </Grid>

                <Grid item md style={{ marginLeft: 12 }}>
                  <Typography
                    variant='body1'
                    paragraph
                    align={matchesSM ? 'center' : 'left'}
                  >
                    Knowledge is power, and data is 21st Century gold. Analyzing
                    this data can reveal hidden patterns and trends in your
                    business, empowering you to make smarter decisions with
                    measurable effects.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction='row'
            style={{ marginBottom: '8em' }}
            justify={matchesMD ? 'center' : 'flex-end'}
          >
            <Grid
              item
              container
              direction='column'
              justify='center'
              className={classes.itemContainer}
            >
              <Grid item>
                <Typography
                  variant='h4'
                  gutterBottom
                  align={matchesSM ? 'center' : 'left'}
                >
                  E-Commerce
                </Typography>
              </Grid>

              <Grid
                item
                container
                direction='row'
                justify='center'
                alignItems='center'
              >
                <Grid item md>
                  <img
                    src={ecommerce}
                    alt='E-Commerce'
                    style={{ width: '20em' }}
                  />
                </Grid>

                <Grid item md style={{ marginLeft: 12 }}>
                  <Typography
                    variant='body1'
                    paragraph
                    align={matchesSM ? 'center' : 'left'}
                  >
                    It’s no secret that people like to shop online.
                  </Typography>
                  <Typography
                    variant='body1'
                    paragraph
                    align={matchesSM ? 'center' : 'left'}
                  >
                    In 2017 over $2.3 trillion was spent in e-commerce, and it’s
                    time for your slice of that pie.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction='row'
            style={{ marginBottom: '8em' }}
            justify={matchesMD ? 'center' : 'flex-start'}
          >
            <Grid
              item
              container
              direction='column'
              justify='center'
              className={classes.itemContainer}
            >
              <Grid item>
                <Typography
                  variant='h4'
                  gutterBottom
                  align={matchesSM ? 'center' : 'left'}
                >
                  Outreach
                </Typography>
              </Grid>

              <Grid
                item
                container
                direction='row'
                justify='center'
                alignItems='center'
              >
                <Grid item md>
                  <img
                    src={outreach}
                    alt='Outreach'
                    style={{ width: '20em' }}
                  />
                </Grid>

                <Grid item md style={{ marginLeft: 12 }}>
                  <Typography
                    variant='body1'
                    paragraph
                    align={matchesSM ? 'center' : 'left'}
                  >
                    Draw people in with a dazzling website. Showing off your
                    products online is a great way to help customers decide
                    what’s right for them before visiting in person.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction='row'
            style={{ marginBottom: '8em' }}
            justify={matchesMD ? 'center' : 'flex-end'}
          >
            <Grid
              item
              container
              direction='column'
              justify='center'
              className={classes.itemContainer}
            >
              <Grid item>
                <Typography
                  variant='h4'
                  gutterBottom
                  align={matchesSM ? 'center' : 'left'}
                >
                  Search Engine Optimization
                </Typography>
              </Grid>

              <Grid
                item
                container
                direction='row'
                justify='center'
                alignItems='center'
              >
                <Grid item md>
                  <img
                    src={seo}
                    alt='Search Engine Optimization'
                    style={{ width: '20em' }}
                  />
                </Grid>

                <Grid item md style={{ marginLeft: 12 }}>
                  <Typography
                    variant='body1'
                    paragraph
                    align={matchesSM ? 'center' : 'left'}
                  >
                    How often have you ever been to the second page of Google
                    results?
                  </Typography>

                  <Typography
                    variant='body1'
                    paragraph
                    align={matchesSM ? 'center' : 'left'}
                  >
                    If you’re like us, probably never.
                  </Typography>

                  <Typography
                    variant='body1'
                    paragraph
                    align={matchesSM ? 'center' : 'left'}
                  >
                    Customers don’t go there either, so we make sure your
                    website is designed to end up on top.
                  </Typography>
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

Websites.propTypes = {
  setTabValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};

export default Websites;
