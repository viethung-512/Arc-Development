import React from 'react';
import { Link } from 'react-router-dom';

// MUI stuff
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import revolutionsBackground from '../../../../assets/repeatingBackground.svg';
import ButtonArrow from '../../../commons/ButtonArrow';

const useStyles = makeStyles(theme => ({
  revolutionsContainer: {
    marginTop: '5em',
    height: '80em',
    [theme.breakpoints.down('sm')]: {
      height: '60em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '40em',
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
  revolutionsBackground: {
    backgroundImage: `url(${revolutionsBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionsCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 30,
    padding: '6em 8em',
    [theme.breakpoints.down('sm')]: {
      padding: '4em 6em',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '2em',
    },
  },
}));

function RevolutionsBlock(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid
      container
      alignItems='center'
      justify='center'
      className={classes.revolutionsContainer}
    >
      <Card className={classes.revolutionsCard}>
        <CardContent>
          <Grid container direction='column' alignItems='center'>
            <Grid item>
              <Typography variant='h3' gutterBottom>
                The Revolution
              </Typography>
            </Grid>
            <Grid item>
              <Grid container direction='column' alignItems='center'>
                <Grid item>
                  <Typography variant='subtitle1'>
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant='outlined'
                    color='primary'
                    className={classes.learnButton}
                    component={Link}
                    to='/revolutions'
                  >
                    <span style={{ marginRight: 10 }}>Learn more</span>
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <div className={classes.revolutionsBackground} />
    </Grid>
  );
}

RevolutionsBlock.propTypes = {};

export default RevolutionsBlock;
