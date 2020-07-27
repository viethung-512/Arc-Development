import React from 'react';

// MUI stuff
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

import infoBackground from '../../../../assets/infoBackground.svg';
import InfoItem from './InfoItem';

const useStyles = makeStyles(theme => ({
  infoContainer: {
    backgroundImage: `url(${infoBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '80em',
    padding: '5em',
    [theme.breakpoints.down('sm')]: {
      padding: '3em',
      height: '60em',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1.5em',
      height: '40em',
    },
  },
}));

function InformationBlock(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.infoContainer}
      alignItems='center'
      justify='space-between'
    >
      <Grid item xs={12} sm={6}>
        <InfoItem
          title='About Us'
          description='Let’s get personal.'
          path='/about'
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InfoItem
          title='Contact Us'
          description='Say hello! 👋🏻'
          alignItems='flex-end'
          path='/contact'
        />
      </Grid>
    </Grid>
  );
}

InformationBlock.propTypes = {};

export default InformationBlock;
