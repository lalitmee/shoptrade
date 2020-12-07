import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';

import * as globalConstants from 'utils/constants';

const { THEME_COLORS } = globalConstants;

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: 'none',
    backgroundColor: THEME_COLORS.WHITE,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuButton: {
    textTransform: 'none',
  },
}));
function Navbar() {
  const styles = useStyles();
  const [showShopMenu, setShowShopMenu] = useState(false);
  return (
    <AppBar color="default" position="static" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <img src="/shoptrade.png" alt="shoptrade-logo" />
        <Box display="flex" alignItems="center">
          <Box mx={1}>
            <Button
              className={styles.menuButton}
              onClick={() => setShowShopMenu(state => !state)}
            >
              <Typography variant="body2">Shop</Typography>
              {showShopMenu ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </Button>
          </Box>
          <Box mx={1}>
            <Button className={styles.menuButton}>
              <Typography variant="body2">About Us</Typography>
            </Button>
          </Box>
          <Box mx={1}>
            <Button className={styles.menuButton}>
              <Typography variant="body2">Our Stores</Typography>
            </Button>
          </Box>
          <Box mx={1}>
            <Button className={styles.menuButton}>
              <Typography variant="body2">Contact Us</Typography>
            </Button>
          </Box>
        </Box>
        <Box display="flex">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="caption">Search</Typography>
            <IconButton edge="end" color="inherit" size="medium">
              <img src="/search.png" alt="user-account" />
            </IconButton>
          </Box>
          <IconButton edge="end" color="inherit" size="medium">
            <img src="/user.png" alt="user-account" />
          </IconButton>
          <IconButton edge="end" color="inherit" size="medium">
            <img src="/cart.png" alt="user-account" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
