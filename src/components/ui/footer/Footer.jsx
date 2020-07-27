import React from 'react';
import { Link } from 'react-router-dom';

// MUI stuff
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import footerAdornment from '../../../assets/Footer Adornment.svg';
import facebook from '../../../assets/facebook.svg';
import twitter from '../../../assets/twitter.svg';
import instagram from '../../../assets/instagram.svg';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: theme.zIndex.modal + 1,
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 700,
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
  icon: {
    height: '4em',
    width: '4em',
    [theme.breakpoints.down('xs')]: {
      height: '2.5em',
      width: '2.5em',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em',
    },
  },
}));

function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container className={classes.mainContainer} justify='center'>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item className={classes.link} component={Link} to='/'>
                Home
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to='/services'
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to='/custom-software'
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to='/mobile-apps'
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to='/websites'
              >
                Websites Development
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to='/revolutions'
              >
                The Revolutions
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to='/revolutions'
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to='/revolutions'
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to='/revolutions'
              >
                Progress
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item className={classes.link} component={Link} to='/about'>
                About Us
              </Grid>
              <Grid item className={classes.link} component={Link} to='/about'>
                History
              </Grid>
              <Grid item className={classes.link} component={Link} to='/about'>
                Team
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to='/contact'
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt='black decorative slash'
        src={footerAdornment}
        className={classes.adornment}
      />
      <Grid
        container
        className={classes.socialContainer}
        justify='flex-end'
        spacing={2}
      >
        <Grid
          item
          component={'a'}
          href='https://facebook.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img alt='facebook' src={facebook} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href='https://twitter.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img alt='twitter' src={twitter} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href='https://instagram.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img alt='instagram' src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
