import React from 'react';

import { ProgramingSkills } from '../components/Skills/ProgramingSkills';
import { Typography } from '@material-ui/core';

export const Skills: React.FC = () => {
  return (
    <div className="Skilss">
      <Typography>スキルセット</Typography>
      <ProgramingSkills />
    </div>
  );
};
