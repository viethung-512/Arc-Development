import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ButtonArrow from '../../../commons/ButtonArrow';

const useStyles = makeStyles(theme => ({
  serviceContainer: {
    marginTop: 24,
    marginBottom: 24,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: '4px 12px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  subtitle: {
    marginBottom: '1em',
  },
}));

function ServiceItem({
  title,
  subtitle1,
  subtitle2,
  image,
  placementFirst,
  servicePath,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      justify={
        matchesSM ? 'center' : placementFirst ? 'flex-start' : 'flex-end'
      }
      className={classes.serviceContainer}
    >
      <Grid item style={matchesSM ? undefined : { width: '35em' }}>
        <Typography variant='h4'>{title}</Typography>
        <Typography variant='subtitle1' className={classes.subtitle}>
          {subtitle1}
        </Typography>
        <Typography variant='subtitle1'>{subtitle2}</Typography>
        <Button
          variant='outlined'
          color='primary'
          className={classes.learnButton}
          component={Link}
          to={servicePath}
        >
          <span style={{ marginRight: 10 }}>Learn more</span>
          <ButtonArrow
            width={10}
            height={10}
            fill={theme.palette.common.blue}
          />
        </Button>
      </Grid>
      <Grid item style={{ width: 150, marginLeft: 12 }}>
        <img src={image} alt={title} style={{ width: '100%' }} />
      </Grid>
    </Grid>
  );
}

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle1: PropTypes.any.isRequired,
  subtitle2: PropTypes.any.isRequired,
  image: PropTypes.any.isRequired,
  placementFirst: PropTypes.bool.isRequired,
  servicePath: PropTypes.string.isRequired,
};

ServiceItem.defaultProps = {
  placementFirst: true,
};

export default ServiceItem;
