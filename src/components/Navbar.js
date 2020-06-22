import React from 'react';
import { Link } from 'react-router-dom';
import cookie from 'cookie';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import { Chip } from '@material-ui/core'

const logout = () => {
  document.cookie = '';
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  user: {
    height: 30,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const cookies = cookie.parse(document.cookie)
  const verified = cookies['username'] ? true : false;
  console.log("cookie is: ", cookies['username'])
  let logButton = verified ? <Link style={{textDecoration: 'none', color: 'white'}} onClick={() => logout()} to='/'>Logout</Link> : <Link style={{textDecoration: 'none', color: 'white'}} to='/login'>Login</Link>
  // const logButton = verified ? '/' : '/login';
  // const logText = verified ? 'Logout' : 'Login';
  // cookies["loggedIn"] ? true : false
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link style={{textDecoration: 'none', color: 'white'}} to="/">Austin Businesses</Link>
          </Typography>
          <Link className={classes.menuButton} style={{textDecoration: 'none', color: 'white'}} to='/addBusiness'>Add a Business</Link>
          <span>{logButton}</span>
        </Toolbar>
  <div className={classes.user}>{verified === true && <span>Logged in as: {cookies['username']}</span>}</div>
      </AppBar>
    </div>
  );
}