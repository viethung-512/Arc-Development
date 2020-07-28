import React from 'react';

// MUI stuff
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import consultation from '../../../../assets/consultationIcon.svg';
import mockup from '../../../../assets/mockupIcon.svg';
import review from '../../../../assets/reviewIcon.svg';
import design from '../../../../assets/designIcon.svg';
import build from '../../../../assets/buildIcon.svg';
import launch from '../../../../assets/launchIcon.svg';
import maintain from '../../../../assets/maintainIcon.svg';
import iterate from '../../../../assets/iterateIcon.svg';

const useStyles = makeStyles(theme => ({
  itemContainer: {
    padding: '5em',
    minHeight: '70em',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      padding: '3em',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1.5em',
    },
  },
  itemParagraph: {
    color: '#fff',
    maxWidth: '20em',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      maxWidth: '35em',
    },
  },
  itemTitle: {
    color: '#000',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  itemImage: {
    width: '30em',
    maxHeight: '50em',
    [theme.breakpoints.down('xs')]: {
      width: '16em',
    },
  },
}));

function Progress(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container direction='column' alignItems='center'>
      <Grid item>
        <Typography variant='h2' gutterBottom>
          Progress
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction='row'
        className={classes.itemContainer}
        style={{ backgroundColor: '#b3b3b3' }}
        justify={matchesMD ? 'center' : 'flex-start'}
      >
        <Grid
          item
          container
          direction='column'
          lg
          alignItems={matchesMD ? 'center' : 'flex-start'}
        >
          <Typography variant='h4' gutterBottom className={classes.itemTitle}>
            Consultation
          </Typography>
          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            Our process begins the moment you realize you need a piece of
            technology for your business. Whether you already have an idea for
            where to start and what to do, or if you just know you want to step
            things up, our initial consultation will help you examine your
            business holistically to find the best solutions.
          </Typography>

          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            Detailed notes will be taken on your requirements and constraints,
            while taking care to identify other potential areas for
            consideration.
          </Typography>

          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            Cutting-edge advancements in machine learning like object detection
            and natural language processing allow computers to do things
            previously unimaginable, and our expertise and intuition will help
            usher you into this new future of possibilities.
          </Typography>
        </Grid>

        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            alt='shakes hand'
            src={consultation}
            className={classes.itemImage}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction='row'
        className={classes.itemContainer}
        style={{ backgroundColor: '#ff7373' }}
        justify={matchesMD ? 'center' : 'flex-start'}
      >
        <Grid
          item
          container
          direction='column'
          lg
          alignItems={matchesMD ? 'center' : 'flex-start'}
        >
          <Typography variant='h4' gutterBottom className={classes.itemTitle}>
            Mockup
          </Typography>
          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            After we settle on the best path forward and decide on a solution to
            pursue, details like the cost and timeline will be finalized.
          </Typography>

          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            Then it’s time for us to start on your minimum viable product.
            That’s just a fancy term for a mockup, which doesn’t include colors,
            images, or any other polished design elements, but captures the
            essential layout structure and functionality.
          </Typography>

          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            This helps us understand and refine the solution itself before
            getting distracted by specifics and looks.
          </Typography>
        </Grid>

        <Grid item lg style={{ alignSelf: 'center' }}>
          <img alt='mockup' src={mockup} className={classes.itemImage} />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction='row'
        className={classes.itemContainer}
        style={{ backgroundColor: '#39b54a' }}
        justify={matchesMD ? 'center' : 'flex-start'}
      >
        <Grid
          item
          container
          direction='column'
          lg
          alignItems={matchesMD ? 'center' : 'flex-start'}
        >
          <Typography variant='h4' gutterBottom className={classes.itemTitle}>
            Review
          </Typography>
          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            Before moving any farther we come back to you with our progress.
            This gives you the freedom to discuss any changes you may want or
            any ideas you may have come up with before any heavy lifting has
            been done.
          </Typography>

          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            We give you an interactive demonstration of the mockups, thoroughly
            explaining the thought process that went into each screen and every
            anticipated feature.
          </Typography>

          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            Once you’re completely satisfied with the vision for our solution we
            get down to the nitty gritty, fine-details of design.
          </Typography>
        </Grid>

        <Grid item lg style={{ alignSelf: 'center' }}>
          <img alt='review' src={review} className={classes.itemImage} />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction='row'
        className={classes.itemContainer}
        style={{ backgroundColor: '#a67c52' }}
        justify={matchesMD ? 'center' : 'flex-start'}
      >
        <Grid
          item
          container
          direction='column'
          lg
          alignItems={matchesMD ? 'center' : 'flex-start'}
        >
          <Typography variant='h4' gutterBottom className={classes.itemTitle}>
            Design
          </Typography>
          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            Using the mockups and notes taken during the consultation as guides,
            we will start ironing out what the final product will look like.
            This also involves using any brand material like fonts, colors, and
            logos to extend the experience you’re already familiar with.
          </Typography>

          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            No aspect is superfluous, and care will be taken with every
            decision.
          </Typography>
        </Grid>

        <Grid item lg style={{ alignSelf: 'center' }}>
          <img alt='design' src={design} className={classes.itemImage} />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction='row'
        className={classes.itemContainer}
        style={{ backgroundColor: '#39b54a' }}
        justify={matchesMD ? 'center' : 'flex-start'}
      >
        <Grid
          item
          container
          direction='column'
          lg
          alignItems={matchesMD ? 'center' : 'flex-start'}
        >
          <Typography variant='h4' gutterBottom className={classes.itemTitle}>
            Review
          </Typography>
          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            A second round of review is essential to our goal of creating
            exactly what you want, exactly how you want it.
          </Typography>

          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            This time we’ll be going over the finalized designs in another fully
            interactive demonstration. Again this gives you an opportunity to
            tweak things and make sure we get everything right the first time.
          </Typography>
        </Grid>

        <Grid item lg style={{ alignSelf: 'center' }}>
          <img alt='review' src={review} className={classes.itemImage} />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction='row'
        className={classes.itemContainer}
        style={{ backgroundColor: '#fbb03b' }}
        justify={matchesMD ? 'center' : 'flex-start'}
      >
        <Grid
          item
          container
          direction='column'
          lg
          alignItems={matchesMD ? 'center' : 'flex-start'}
        >
          <Typography variant='h4' gutterBottom className={classes.itemTitle}>
            Build
          </Typography>
          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            Here’s where we get down to business.
          </Typography>

          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            Engineering begins after your approval on the final designs. We
            start by scaffolding out the project on a high level, prioritizing
            some areas over others.
          </Typography>

          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            Each area is then developed in order of importance until ready to be
            connected to the next piece.
          </Typography>

          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            Typically the backend, behind the scenes operations are completed
            first. Once all the services are in place we can then create the
            front end, user side of things.
          </Typography>

          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            Finishing the application doesn’t mean we’re done though, because we
            use extensive testing to guarantee compatibility with all intended
            devices.
          </Typography>

          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            Only after our rigorous examinations will we accept a product as
            finished, then pushing it through the production pipeline. This
            produces an optimized, compressed, consumer version of the code and
            assets ready for deployment.
          </Typography>
        </Grid>

        <Grid item lg style={{ alignSelf: 'center' }}>
          <img alt='build' src={build} className={classes.itemImage} />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction='row'
        className={classes.itemContainer}
        style={{ backgroundColor: '#c1272d' }}
        justify={matchesMD ? 'center' : 'flex-start'}
      >
        <Grid
          item
          container
          direction='column'
          lg
          alignItems={matchesMD ? 'center' : 'flex-start'}
        >
          <Typography variant='h4' gutterBottom className={classes.itemTitle}>
            Launch
          </Typography>
          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            The moment we’ve all been waiting for.
          </Typography>

          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            When construction comes to a close you’re the first one to know.
            We’ll give our final demonstration to show off your shiny new
            software in the wild so you know exactly how it will look to your
            users.
          </Typography>

          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            When you say the word, we press the button and launch your project
            out to the public. We’re there to ensure everything goes to plan so
            you can start reaping the rewards of your technological investment
            immediately.
          </Typography>
        </Grid>

        <Grid item lg style={{ alignSelf: 'center' }}>
          <img alt='launch' src={launch} className={classes.itemImage} />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction='row'
        className={classes.itemContainer}
        style={{ backgroundColor: '#8e45ce' }}
        justify={matchesMD ? 'center' : 'flex-start'}
      >
        <Grid
          item
          container
          direction='column'
          lg
          alignItems={matchesMD ? 'center' : 'flex-start'}
        >
          <Typography variant='h4' gutterBottom className={classes.itemTitle}>
            Maintain
          </Typography>
          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            Our work doesn’t end there.
          </Typography>

          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            After a successful launch we keep in close contact to listen to
            feedback and hear how the project is being received.
          </Typography>

          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            From there on out we make sure your application is kept up to date
            and taking advantage of the best features and practices available.
            When new developments arise or new techniques are discovered in
            future projects, we will implement those advancements in your
            project as part of our routine maintenance.
          </Typography>
        </Grid>

        <Grid item lg style={{ alignSelf: 'center' }}>
          <img alt='maintain' src={maintain} className={classes.itemImage} />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction='row'
        className={classes.itemContainer}
        style={{ backgroundColor: '#29abe2' }}
        justify={matchesMD ? 'center' : 'flex-start'}
      >
        <Grid
          item
          container
          direction='column'
          lg
          alignItems={matchesMD ? 'center' : 'flex-start'}
        >
          <Typography variant='h4' gutterBottom className={classes.itemTitle}>
            Iterate
          </Typography>
          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            The cycle repeats whenever you come up with a new idea for extending
            your current project, or come up with a brand new system entirely.
          </Typography>

          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            By planning for future features and changes we can build and evolve
            your application over time. As new use cases and customer needs
            develop we can respond with continuous integration of new content.
          </Typography>

          <Typography
            variant='body1'
            paragraph
            className={classes.itemParagraph}
          >
            Our iterative process will keep you current and competitive,
            allowing you to quickly implement changes instead of waiting months
            for a single update.
          </Typography>
        </Grid>

        <Grid item lg style={{ alignSelf: 'center' }}>
          <img alt='iterate' src={iterate} className={classes.itemImage} />
        </Grid>
      </Grid>
    </Grid>
  );
}

Progress.propTypes = {};

export default Progress;
