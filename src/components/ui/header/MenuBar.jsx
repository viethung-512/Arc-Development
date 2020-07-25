import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// MUI stuff
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import { routes, serviceOptions } from '../../../utils/config';

const useStyles = makeStyles(theme => ({
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: 25,
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: 50,
    marginLeft: 50,
    marginRight: 25,
    height: 45,
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
}));

function MenuBar({ tabValue, changeTab, changeSelectedMenu, selectedIndex }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openServiceMenu, setOpenServiceMenu] = useState(false);

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setOpenServiceMenu(false);
  };

  const handleOpenMenu = e => {
    setAnchorEl(e.currentTarget);
    setOpenServiceMenu(true);
  };

  const handleMenuItemClick = index => {
    setAnchorEl(null);
    setOpenServiceMenu(false);
    changeSelectedMenu(index);
    changeTab(1);
  };

  return (
    <Fragment>
      <Tabs
        indicatorColor='primary'
        value={tabValue}
        onChange={(e, newValue) => changeTab(newValue)}
        className={classes.tabContainer}
      >
        {routes.map((tab, index) =>
          index === 1 ? (
            <Tab
              key={index}
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup={anchorEl ? 'true' : undefined}
              className={classes.tab}
              label={tab.label}
              component={Link}
              to={tab.path}
              onMouseOver={handleOpenMenu}
            />
          ) : (
            <Tab
              key={index}
              className={classes.tab}
              label={tab.label}
              component={Link}
              to={tab.path}
            />
          )
        )}
      </Tabs>
      <Button
        variant='contained'
        color='secondary'
        className={classes.button}
        component={Link}
        to='/estimate'
      >
        Free Estimate
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={openServiceMenu}
        onClose={handleCloseMenu}
        MenuListProps={{
          onMouseLeave: handleCloseMenu,
        }}
        classes={{ paper: classes.menu }}
        elevation={0}
      >
        {serviceOptions.map(({ label, path }, index) => (
          <MenuItem
            key={index}
            onClick={() => handleMenuItemClick(index)}
            component={Link}
            to={path}
            classes={{ root: classes.menuItem }}
            selected={index === selectedIndex && tabValue === 1}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
}

MenuBar.propTypes = {
  tabValue: PropTypes.number.isRequired,
  changeTab: PropTypes.func.isRequired,
  changeSelectedMenu: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
};

export default MenuBar;
