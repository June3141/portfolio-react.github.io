import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import logo from '../../assets/images/logo.svg';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  icon: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export const ImageAvatars: React.FC = () => {
  const classes = useStyles();

  return (
    <div className="ImageAvaters">
      <div className={classes.root}>
        <Avatar alt="June3141" src={logo} className={classes.icon} />
      </div>
      <Typography>June 3141</Typography>
    </div>
  );
};
