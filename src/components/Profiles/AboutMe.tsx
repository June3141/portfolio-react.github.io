import React from 'react';
import { Typography } from '@material-ui/core';
import { ProfileIcon } from './ProfileIcon';

export const AboutMe: React.FC = () => {
  return (
    <div className="aboutMe">
      <ProfileIcon />
      <Typography>hi ,my name is jun.</Typography>
    </div>
  );
};
