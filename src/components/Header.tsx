import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  app: {
    textAlign: 'center',
  },

  appHeader: {
    backgroundColor: '#282c34',
    minHeight: '30vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },

  appLink: {
    color: '#61dafb',
  },

  appLogo: {
    animation: '$App-logo-spin infinite 20s linear',
    height: '20vmin',
    pointeEvents: 'none',
  },

  '@keyframes App-logo-spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
});

export const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <p></p>
      </header>
    </div>
  );
};
