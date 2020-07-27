import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// MUI stuff
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import ElevationScroll from '../../commons/ElevationScroll';
import MenuDrawer from './MenuDrawer';
import MenuBar from './MenuBar';
import logo from '../../../assets/logo.svg';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  appBar: {
    [theme.breakpoints.down('md')]: {
      zIndex: theme.zIndex.modal + 1,
    },
  },
}));

function Header({
  tabValue,
  selectedIndex,
  setTabValue,
  setSelectedIndex,
  isEstimatePage,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const handleTabChange = tabValue => setTabValue(tabValue);

  const handleChangeSelectedMenu = index => setSelectedIndex(index);

  const renderMenu = matches ? (
    <MenuDrawer tabValue={tabValue} changeTab={handleTabChange} />
  ) : (
    <MenuBar
      changeTab={handleTabChange}
      selectedIndex={selectedIndex}
      tabValue={tabValue}
      changeSelectedMenu={handleChangeSelectedMenu}
      isEstimatePage={isEstimatePage}
    />
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position='fixed' color='primary' className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              to='/'
              disableRipple
              component={Link}
              className={classes.logoContainer}
              onClick={() => setTabValue(0)}
            >
              <img alt='company logo' src={logo} className={classes.logo} />
            </Button>
            {renderMenu}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}

Header.propTypes = {
  tabValue: PropTypes.number.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  setTabValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
  isEstimatePage: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  isEstimatePage: false,
};

export default Header;
