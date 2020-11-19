import React from 'react';
import { Typography } from '@material-ui/core';

import { ProgramingSkills } from '../components/Skills/ProgramingSkills';
import { OtherSkills } from 'src/components/Skills/OtherSkills';

export const Skills: React.FC = () => {
  return (
    <div className="Skilss">
      <Typography>スキルセット</Typography>
      <ProgramingSkills />
      <br />
      <OtherSkills />
    </div>
  );
};
