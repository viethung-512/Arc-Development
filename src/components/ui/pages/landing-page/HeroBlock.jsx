import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';

// MUI stuff
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import animationData from '../../../../animations/landinganimation/data';
import ButtonArrow from '../../../commons/ButtonArrow';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '2em',
    },
  },
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
      minWidth: '18em',
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 20,
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function HeroBlock(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid
      container
      direction='row'
      justify='flex-end'
      alignItems='center'
      className={classes.mainContainer}
    >
      <Grid item sm className={classes.heroTextContainer}>
        <Typography variant='h2' align='center'>
          Bringing West Cost Technology
          <br />
          to the Midwest
        </Typography>
        <Grid
          container
          direction='row'
          justify='center'
          className={classes.buttonContainer}
        >
          <Grid item>
            <Button
              variant='contained'
              color='secondary'
              className={classes.estimateButton}
              component={Link}
              to='/estimate'
            >
              Estimate
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant='outlined'
              color='primary'
              className={classes.learnButtonHero}
              component={Link}
              to='/revolutions'
            >
              <span style={{ marginRight: 10 }}>Learn more</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm className={classes.animation}>
        <Lottie options={defaultOptions} height='100%' width='100%' />
      </Grid>
    </Grid>
  );
}

HeroBlock.propTypes = {};

export default HeroBlock;
