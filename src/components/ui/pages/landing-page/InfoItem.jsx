import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// MUI stuff
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ButtonArrow from '../../../commons/ButtonArrow';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  learnMoreButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 30,
    color: 'white',
    borderColor: 'white',
    padding: '4px 12px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
}));

function InfoItem({ title, description, alignItems, path }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid
      container
      direction='column'
      alignItems={matchesXS ? 'center' : alignItems}
    >
      <Typography variant='h2' style={{ color: 'white' }}>
        {title}
      </Typography>
      <Typography variant='subtitle2'>{description}</Typography>
      <Button
        variant='outlined'
        className={classes.learnMoreButton}
        component={Link}
        to={path}
      >
        <span style={{ marginRight: 10 }}>Learn More</span>
        <ButtonArrow width={10} height={10} fill='white' />
      </Button>
    </Grid>
  );
}

InfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  alignItems: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

InfoItem.defaultProps = {
  alignItems: 'flex-start',
};

export default InfoItem;
