import React from 'react';
import PropTypes from 'prop-types';

// MUI stuff
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

import sendIcon from '../../../../assets/send.svg';

function DialogConfirm({
  open,
  onClose,
  classes,
  credential,
  error,
  onChange,
  formValueValid,
  confirm,
  loading,
}) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      style={{ zIndex: 1302 }}
      PaperProps={{
        style: { padding: matchesSM ? '2em 0.5em' : '2em' },
      }}
      fullScreen={matchesXS}
    >
      <DialogContent>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h4' align='center'>
              Confirm Message
            </Typography>
          </Grid>

          <Grid item className={classes.inputItem}>
            <TextField
              label='Name'
              id='name'
              name='name'
              value={credential.name}
              onChange={onChange}
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
              value={credential.email}
              onChange={onChange}
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
              value={credential.phone}
              onChange={onChange}
              fullWidth
            />
          </Grid>
          <Grid
            item
            className={classes.itemContainer}
            style={{ maxWidth: matchesSM ? 'unset' : '20em' }}
          >
            <TextField
              id='message'
              name='message'
              value={credential.message}
              onChange={onChange}
              multiline
              rows={5}
              fullWidth
              className={classes.message}
              style={{
                marginTop: '3em',
              }}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? 'column-reverse' : 'row'}
            style={{ marginTop: '2em' }}
            alignItems='center'
          >
            <Grid item xs>
              <Button color='primary' onClick={onClose}>
                Cancel
              </Button>
            </Grid>
            <Grid item xs>
              <Button
                disabled={!!!formValueValid || loading}
                variant='contained'
                className={classes.sendButton}
                onClick={confirm}
              >
                Send Message{' '}
                <img
                  src={sendIcon}
                  alt='send message'
                  style={{ marginLeft: '1em' }}
                />
                {loading && (
                  <div className={classes.buttonProgress}>
                    <CircularProgress size={24} color='primary' />
                  </div>
                )}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

DialogConfirm.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  classes: PropTypes.object,
  credential: PropTypes.object,
  error: PropTypes.object,
  onChange: PropTypes.func,
  formValueValid: PropTypes.bool,
  confirm: PropTypes.func,
  loading: PropTypes.bool,
};

DialogConfirm.defaultProps = {
  open: false,
};

export default DialogConfirm;
