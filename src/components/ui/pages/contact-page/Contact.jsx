import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// MUI stuff
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';

import { isValidEmail, isValidPhone, isEmpty } from '../../../../utils/helper';

import CallToAction from './CustomCallToAction';
import DialogConfirm from './DialogConfirm.jsx';
import phoneIcon from '../../../../assets/phone.svg';
import emailIcon from '../../../../assets/email.svg';
import sendIcon from '../../../../assets/send.svg';

const useStyles = makeStyles(theme => ({
  formContainer: {
    padding: '5em 2em',
    [theme.breakpoints.down('md')]: {
      padding: '5em 3em',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1.5em',
    },
  },
  titleForm: {
    lineHeight: 1,
  },
  subtitleForm: {
    color: theme.palette.common.blue,
  },
  itemContainer: {
    maxWidth: '20em',
  },
  itemText: {
    fontSize: '1rem',
    color: theme.palette.common.blue,
    marginLeft: 12,
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    borderRadius: 5,
    marginTop: '5em',
  },
  inputItem: {
    marginBottom: '0.5em',
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('xs')]: {
      width: 200,
    },
  },
  buttonProgress: {
    ...theme.custom.buttonCircularProgress,
  },
}));

function Contact({ setTabValue }) {
  const classes = useStyles();
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: '',
  });

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const handleCloseDialog = () => setOpenDialog(false);

  const handleOpenDialog = () => setOpenDialog(true);

  useEffect(() => {
    init();

    return () => {
      setState({ name: '', email: '', phone: '', message: '' });
      setError({});
    };

    // eslint-disable-next-line
  }, []);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        if (isEmpty(e.target.value)) {
          setError({ ...error, name: 'Must not be empty' });
        } else {
          setError({ ...error, name: null });
        }
        break;
      case 'phone':
        if (!isValidPhone(e.target.value)) {
          setError({ ...error, phone: 'Phone number is not valid' });
        } else {
          setError({ ...error, phone: null });
        }
        break;
      case 'email':
        if (!isValidEmail(e.target.value)) {
          setError({ ...error, email: 'Email is not valid' });
        } else {
          setError({ ...error, email: null });
        }
        break;
      case 'message':
        if (isEmpty(e.target.value)) {
          setError({ ...error, message: 'Must not be empty' });
        } else {
          setError({ ...error, message: null });
        }
        break;
      default:
        break;
    }

    setState({ ...state, [e.target.name]: e.target.value });
  };

  const init = () => setTabValue(4);

  const onConfirm = () => {
    setLoading(true);
    axios
      .get(
        'https://us-central1-material-ui-course-87261.cloudfunctions.net/sendMail',
        {
          params: {
            name: state.name,
            email: state.email,
            phone: state.phone,
            message: state.message,
          },
        }
      )
      .then(res => {
        console.log(res);
        setOpenDialog(false);
        setState({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        setAlert({
          open: true,
          message: 'Message send successfully',
          backgroundColor: '#4BB543',
        });
      })
      .catch(err => {
        console.log(err);
        setAlert({
          open: true,
          message: 'Something went wrong, please try again!',
          backgroundColor: '#FF3232',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const formValueValid =
    !error.name &&
    !error.email &&
    !error.phone &&
    !error.message &&
    !isEmpty(state.name) &&
    !isEmpty(state.phone) &&
    !isEmpty(state.email) &&
    !isEmpty(state.message);

  return (
    <Grid container>
      <Grid
        item
        container
        direction='column'
        lg={4}
        xl={3}
        justify='flex-start'
        alignItems='center'
        className={classes.formContainer}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography
                variant='h2'
                className={classes.titleForm}
                align={matchesMD ? 'center' : 'left'}
              >
                Contact Us
              </Typography>
              <Typography
                variant='body1'
                className={classes.subtitleForm}
                gutterBottom
                align={matchesMD ? 'center' : 'left'}
              >
                We’re waiting.
              </Typography>
            </Grid>
            <Grid
              item
              container
              alignItems='flex-end'
              style={{ marginTop: '2em' }}
            >
              <Grid item>
                <img alt='phone' src={phoneIcon} />
              </Grid>
              <Grid item>
                <Typography className={classes.itemText} variant='body1'>
                  <a
                    href='tel:5555555555'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    (555) 555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              alignItems='flex-end'
              style={{ marginBottom: '2em' }}
            >
              <Grid item>
                <img alt='email' src={emailIcon} />
              </Grid>
              <Grid item>
                <Typography className={classes.itemText} variant='body1'>
                  <a
                    href='mailto:zach@gmail.com'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    zach@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction='column'
              className={classes.itemContainer}
              alignItems='center'
            >
              <Grid item className={classes.inputItem}>
                <TextField
                  label='Name'
                  id='name'
                  name='name'
                  value={state.name}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item className={classes.inputItem}>
                <TextField
                  label='Email'
                  id='email'
                  name='email'
                  error={!!error.email}
                  helperText={error.email}
                  value={state.email}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item className={classes.inputItem}>
                <TextField
                  label='Phone'
                  id='phone'
                  name='phone'
                  error={!!error.phone}
                  helperText={error.phone}
                  value={state.phone}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid item className={classes.itemContainer}>
              <TextField
                id='message'
                name='message'
                value={state.message}
                onChange={handleChange}
                multiline
                rows={10}
                fullWidth
                className={classes.message}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
            <Grid item container justify='center' style={{ marginTop: '2em' }}>
              <Button
                disabled={!!!formValueValid}
                variant='contained'
                className={classes.sendButton}
                onClick={handleOpenDialog}
              >
                Send Message{' '}
                <img
                  src={sendIcon}
                  alt='send message'
                  style={{ marginLeft: '1em' }}
                />
              </Button>
              <DialogConfirm
                open={openDialog}
                onClose={handleCloseDialog}
                classes={classes}
                credential={state}
                error={error}
                onChange={handleChange}
                formValueValid={formValueValid}
                confirm={onConfirm}
                loading={loading}
              />
              <Snackbar
                open={alert.open}
                message={alert.message}
                ContentProps={{
                  style: {
                    backgroundColor: alert.backgroundColor,
                  },
                }}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                onClose={() => setAlert({ ...alert, open: false })}
                autoHideDuration={4000}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container lg={8} xl={9}>
        <CallToAction />
      </Grid>
    </Grid>
  );
}

Contact.propTypes = {
  setTabValue: PropTypes.func.isRequired,
};

export default Contact;
