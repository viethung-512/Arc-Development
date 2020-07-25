import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// MUI stuff
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { routes } from '../../../utils/config';

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
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: 50,
    width: 50,
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    opacity: 1,
  },
}));

function MenuDrawer({ tabValue, changeTab }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleToggleDrawer = () => setOpen(!open);

  const handleItemClick = value => {
    handleToggleDrawer();
    changeTab(value);
  };

  return (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={open}
        onClose={handleToggleDrawer}
        onOpen={handleToggleDrawer}
        classes={{
          paper: classes.drawer,
        }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((tab, index) => (
            <ListItem
              onClick={() => handleItemClick(index)}
              divider
              button
              key={index}
              component={Link}
              to={tab.path}
              selected={index === tabValue}
            >
              <ListItemText
                className={
                  index === tabValue
                    ? clsx(classes.drawerItem, classes.drawerItemSelected)
                    : classes.drawerItem
                }
                disableTypography
              >
                {tab.label}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            onClick={handleItemClick}
            divider
            button
            component={Link}
            to='/estimate'
            className={classes.drawerItemEstimate}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={handleToggleDrawer}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );
}

MenuDrawer.propTypes = {
  tabValue: PropTypes.number.isRequired,
  changeTab: PropTypes.func.isRequired,
};

export default MenuDrawer;
