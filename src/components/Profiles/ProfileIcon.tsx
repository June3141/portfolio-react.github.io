import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import profileIconImage from '../../assets/images/profileIconImage.png';

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

export const ProfileIcon: React.FC = () => {
  const classes = useStyles();

  return (
    <div className="ProfileIcon">
      <div className={classes.root}>
        <Avatar
          alt="June3141"
          src={profileIconImage}
          className={classes.icon}
        />
      </div>
    </div>
  );
};
