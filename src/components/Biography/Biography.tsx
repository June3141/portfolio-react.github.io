import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { ImageAvatars } from './ImageAvater';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

export const Biography: React.FC = () => {
  const classes = useStyles();

  return (
    <div className="Biograhy">
      <ImageAvatars />
      <div className={classes.root}>
        <Typography>
          　ご覧くださいましてありがとうございます。 このSPAアプリは TypeScript,
          React で作成したデモ用のページです。
        </Typography>
      </div>
      ;
    </div>
  );
};
