import React, { Fragment, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import AuthContext from '../context/auth/authContext';

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  selected: {
    textDecoration: 'underline',
  },
}));

function Header() {
  const classes = useStyles();
  const { fetchUser } = useContext(AuthContext);

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            MERN Shops
          </Typography>
          <nav>
            <Link
              component={NavLink}
              variant="button"
              color="textPrimary"
              to="/nearby"
              className={classes.link}
              activeClassName={classes.selected}
            >
              Nearby Shops
            </Link>
            <Link
              component={NavLink}
              variant="button"
              color="textPrimary"
              to="/preferred"
              className={classes.link}
              activeClassName={classes.selected}
            >
              Preferred Shops
            </Link>
          </nav>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default Header;
