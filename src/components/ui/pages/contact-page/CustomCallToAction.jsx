import React from 'react';
import { Link } from 'react-router-dom';

// MUI stuff
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ButtonArrow from '../../../commons/ButtonArrow';
import background from '../../../../assets/background.jpg';
import mobileBackground from '../../../../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
  callToActionContainer: {
    height: '60em',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center top',
    padding: '5em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1.5em',
      height: '50em',
    },
  },
  learnMoreButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 30,
    padding: '4px 12px',
  },
  estimateButton: {
    ...theme.typography.estimate,
    fontSize: '1.5rem',
    borderRadius: 50,
    height: 80,
    width: 205,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

function CustomCallToAction(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      container
      className={classes.callToActionContainer}
      alignItems='center'
      justify='space-around'
      direction={matchesMD ? 'column' : 'row'}
    >
      <Grid item>
        <Grid
          container
          direction='column'
          alignItems={matchesMD ? 'center' : 'flex-start'}
          style={matchesMD ? { textAlign: 'center' } : null}
        >
          <Typography variant='h2' gutterBottom>
            Simple Software. <br /> Revolutionary Results.
          </Typography>
          <Typography variant='subtitle2'>
            Take advantage of the 21st Century.
          </Typography>
          <Grid item>
            <Button
              variant='outlined'
              className={classes.learnMoreButton}
              component={Link}
              to='/revolutions'
            >
              <span style={{ marginRight: 5 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Button
          variant='contained'
          color='secondary'
          className={classes.estimateButton}
          component={Link}
          to='/estimate'
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}

CustomCallToAction.propTypes = {};

export default CustomCallToAction;
