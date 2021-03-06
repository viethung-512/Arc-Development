import React from 'react';
import Lottie from 'react-lottie';

// MUI stuff
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import vision from '../../../../assets/vision.svg';
import technologyAnimation from '../../../../animations/technologyAnimation/data';

const technologyOptions = {
  loop: true,
  autoplay: true,
  animationData: technologyAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const useStyles = makeStyles(theme => ({
  revolutionsContainer: {
    padding: '3em 5em',
    [theme.breakpoints.down('md')]: {
      padding: '1.75em 3em',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1.75em 2em',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1.5em',
    },
  },
  heading: {
    fontFamily: 'Pacifico',
    fontWeight: 300,
  },
  imageImage: {
    maxWidth: '50em',
    [theme.breakpoints.down('md')]: {
      maxWidth: '35em',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '20em',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '15em',
    },
  },
}));

function Revolution(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      direction='column'
      alignItems={matchesMD ? 'center' : 'flex-start'}
      className={classes.revolutionsContainer}
    >
      <Grid item>
        <Typography variant='h2' className={classes.heading}>
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems='center'
        style={{ marginBottom: '8em' }}
      >
        <Grid
          item
          container
          alignItems='center'
          justify='center'
          md
          style={
            matchesMD
              ? { marginBottom: 12, marginTop: 12 }
              : { marginLeft: 12, marginRight: 12 }
          }
        >
          <img
            alt='vision'
            src={vision}
            style={{ maxWidth: matchesSM ? '14em' : '30em' }}
            className={classes.itemImage}
          />
        </Grid>
        <Grid
          item
          container
          md
          direction='column'
          alignItems={matchesMD ? 'center' : 'flex-end'}
          style={
            matchesMD
              ? { marginBottom: 12, marginTop: 12, maxWidth: '45em' }
              : { marginLeft: 12, marginRight: 12, maxWidth: '45em' }
          }
        >
          <Typography
            variant='h4'
            gutterBottom
            align={matchesMD ? 'center' : 'right'}
          >
            Vision
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesMD ? 'center' : 'right'}
          >
            The rise of computers, and subsequently the Internet, has completely
            altered every aspect of human life. This has increased our comfort,
            broadened our connections, and reshaped how we view the world.
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesMD ? 'center' : 'right'}
          >
            What once was confined to huge rooms and teams of engineers now
            resides in every single one of our hands. Harnessing this unlimited
            potential by using it to solve problems and better lives is at the
            heart of everything we do.
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesMD ? 'center' : 'right'}
          >
            We want to help businesses capitalize on the latest and greatest
            technology. The best way to predict the future is to be the one
            building it, and we want to help guide the world into this next
            chapter of technological expansion, exploration, and innovation.
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesMD ? 'center' : 'right'}
          >
            By holding ourselves to rigorous standards and pristine quality, we
            can ensure you have the absolute best tools necessary to thrive in
            this new frontier.
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesMD ? 'center' : 'right'}
          >
            We see a future where every individual has personalized software
            custom tailored to their lifestyle, culture, and interests, helping
            them overcome life’s obstacles. Each project is a step towards that
            goal.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row-reverse'}
        alignItems='center'
        style={{ marginBottom: '8em' }}
      >
        <Grid
          item
          container
          alignItems='center'
          justify={matchesMD ? 'center' : 'flex-end'}
          md
          style={
            matchesMD
              ? { marginBottom: 12, marginTop: 12 }
              : { marginLeft: 12, marginRight: 12 }
          }
        >
          <Lottie
            options={technologyOptions}
            style={{ maxWidth: '40em', margin: 0 }}
          />
        </Grid>
        <Grid
          item
          container
          md
          direction='column'
          alignItems={matchesMD ? 'center' : 'flex-start'}
          style={
            matchesMD
              ? { marginBottom: 12, marginTop: 12, maxWidth: '45em' }
              : { marginLeft: 12, marginRight: 12, maxWidth: '45em' }
          }
        >
          <Typography
            variant='h4'
            gutterBottom
            align={matchesMD ? 'center' : 'left'}
          >
            Technology
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesMD ? 'center' : 'left'}
          >
            In 2013, Facebook invented a new way of building websites. This new
            system, React.js, completely revolutionizes the process and practice
            of website development.
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesMD ? 'center' : 'left'}
          >
            Instead of chaining together long individual pages, like traditional
            websites, React websites are built with little chunks of code called
            components. These components are faster, easier to maintain, and are
            easily reused and customized, each serving a singular purpose.
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesMD ? 'center' : 'left'}
          >
            Two years later they shocked the world by releasing a similar
            system, React Native, for producing iOS and Android apps. Instead of
            having to master two completely separate development platforms, you
            can leverage the knowledge you already possessed from building
            websites and reapply it directly! This was a huge leap forward.
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesMD ? 'center' : 'left'}
          >
            This technology is now being used by companies like AirBnB,
            Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
            Facebook purchased Instagram large portions of it were even rebuilt
            using React.
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesMD ? 'center' : 'left'}
          >
            Developers have since built on top of these systems by automating
            project setup and deployment, allowing creators to focus as much as
            possible on their work itself.
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesMD ? 'center' : 'left'}
          >
            These technical advancements translate into savings by significantly
            reducing the workload and streamlining the workflow for developing
            new pieces of software, while also lowering the barrier to entry for
            mobile app development.
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesMD ? 'center' : 'left'}
          >
            This puts personalization in your pocket — faster, better, and more
            affordable than ever before.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

Revolution.propTypes = {};

export default Revolution;
