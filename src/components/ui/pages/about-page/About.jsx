import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import CallToAction from '../../../commons/CallToAction';
import history from '../../../../assets/history.svg';
import profile from '../../../../assets/founder.jpg';
import yearbook from '../../../../assets/yearbook.svg';
import puppy from '../../../../assets/puppy.svg';

const useStyles = makeStyles(theme => ({
  missionStatement: {
    fontStyle: 'italic',
    fontSize: '1.5rem',
    fontWeight: 300,
    maxWidth: '50em',
    lineHeight: 1.4,
    marginTop: '3em',
    marginBottom: '5em',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '1em',
    },
  },
  historyContainer: {
    padding: '7em',
    [theme.breakpoints.down('md')]: {
      padding: '5em',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1.5em',
    },
  },
  teamContainer: {
    paddingTop: '5em',
    paddingBottom: '5em',
  },
  avatar: {
    height: '25em',
    width: '25em',
    [theme.breakpoints.down('sm')]: {
      height: '20em',
      width: '20em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '14em',
      width: '14em',
    },
  },
  itemImage: {
    maxWidth: '25em',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '20em',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '14em',
    },
  },
}));

function About({ setTabValue }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    init();

    // eslint-disable-next-line
  }, []);

  const init = () => setTabValue(3);
  return (
    <Grid container direction='column'>
      <Grid
        item
        container
        direction='column'
        className={classes.historyContainer}
        alignItems='center'
      >
        <Grid item container justify={matchesSM ? 'center' : 'flex-start'}>
          <Typography
            variant='h2'
            align={matchesSM ? 'center' : 'left'}
            gutterBottom
          >
            About Us
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant='h4'
            className={classes.missionStatement}
            align='center'
          >
            Whether it be person to person, business to consumer, or an
            individual to their interests, technology is meant to bring us
            closer to what we care about in the best way possible. Arc
            Development will use that principle to provide fast, modern,
            inexpensive, and aesthetic software to the Midwest and beyond.
          </Typography>
        </Grid>
        <Grid item container justify='space-around'>
          <Grid item>
            <Grid
              item
              container
              direction='column'
              alignItems={matchesMD ? 'center' : 'flex-start'}
              lg
              style={matchesMD ? undefined : { maxWidth: '35em' }}
            >
              <Grid item>
                <Typography variant='h4'>History</Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant='h6'
                  paragraph
                  align={matchesMD ? 'center' : 'left'}
                  style={{ fontStyle: 'italic' }}
                >
                  We’re the new kid on the block.
                </Typography>
                <Typography
                  variant='body1'
                  paragraph
                  align={matchesMD ? 'center' : 'left'}
                >
                  Founded in 2019, we’re ready to get our hands on the world’s
                  business problems.
                </Typography>
                <Typography
                  variant='body1'
                  paragraph
                  align={matchesMD ? 'center' : 'left'}
                >
                  It all started with one question: Why aren’t all businesses
                  using available technology? There are many different answers
                  to that question: economic barriers, social barriers,
                  educational barriers, and sometimes institutional barriers.
                </Typography>
                <Typography
                  variant='body1'
                  paragraph
                  align={matchesMD ? 'center' : 'left'}
                >
                  We aim to be a powerful force in overcoming these obstacles.
                  Recent developments in software engineering and computing
                  power, compounded by the proliferation of smart phones, has
                  opened up infinite worlds of possibility. Things that have
                  always been done by hand can now be done digitally and
                  automatically, and completely new methods of interaction are
                  created daily. Taking full advantage of these advancements is
                  the name of the game.
                </Typography>
                <Typography
                  variant='body1'
                  paragraph
                  align={matchesMD ? 'center' : 'left'}
                >
                  All this change can be a lot to keep up with, and that’s where
                  we come in.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid item container justify='center' alignItems='center' lg>
              <img alt='history' src={history} className={classes.itemImage} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction='column'
        className={classes.teamContainer}
        alignItems='center'
      >
        <Grid item>
          <Typography variant='h4' align='center' gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' align='center' paragraph>
            Zachary Reece, Founder
          </Typography>
          <Typography variant='body1' align='center' paragraph>
            I started coding when I was 9 years old.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt='Founder' src={profile} className={classes.avatar} />
        </Grid>
        <Grid
          item
          container
          direction={matchesMD ? 'column' : 'row'}
          alignItems='center'
        >
          <Hidden lgUp>
            <Grid
              item
              lg
              style={{
                maxWidth: '40em',
                padding: matchesSM ? '2em' : '1.25em',
              }}
            >
              <Typography variant='body1' align='center' paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant='body1' align='center' paragraph>
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction='column'
            lg
            alignItems={matchesMD ? 'center' : 'flex-start'}
            style={{ marginBottom: matchesMD ? '2.5em' : 0 }}
          >
            <Grid item>
              <img
                alt='year book'
                src={yearbook}
                className={classes.itemImage}
              />
            </Grid>
            <Grid item>
              <Typography variant='caption'>
                a page from my Sophomore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid
              item
              lg
              style={{
                maxWidth: '40em',
                padding: matchesSM ? '2em' : '1.25em',
              }}
            >
              <Typography variant='body1' align='center' paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant='body1' align='center' paragraph>
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction='column'
            lg
            alignItems={matchesMD ? 'center' : 'flex-end'}
          >
            <Grid item>
              <img alt='puppy' src={puppy} className={classes.itemImage} />
            </Grid>
            <Grid item>
              <Typography variant='caption'>
                my miniature dapple dachshund, Sterling
              </Typography>
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

About.propTypes = {
  setTabValue: PropTypes.func.isRequired,
};

export default About;
