import React from 'react';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ProgramLanguages: React.FC = () => {
  const item: string[] = [
    'JavaScript (TypeScript)',
    'Python3',
    'Golang',
    'Rust',
    'Haskell',
    'Fortran',
  ];

  return (
    <div>
      <ListItem>
        <ListItemText>{item.join(' / ')} </ListItemText>
      </ListItem>
    </div>
  );
};

const Frameworks: React.FC = () => {
  const item: string[] = ['React', 'NodeJS', 'Flask'];

  return (
    <div>
      <ListItem>
        <ListItemText>{item.join(' / ')} </ListItemText>
      </ListItem>
    </div>
  );
};

const OtherTools: React.FC = () => {
  const item: string[] = [
    'Git',
    'GitHub',
    'Ansible',
    'Kubernetes',
    'OpenShift',
    'Docker',
    'Vim (NeoVim)',
  ];

  return (
    <div>
      <ListItem>
        <ListItemText>{item.join(' / ')} </ListItemText>
      </ListItem>
    </div>
  );
};

export const ProgramingSkills: React.FC = () => {
  return (
    <div className="ProgramingSkills">
      <Typography> プログラミング関連 </Typography>
      <List className="OtherSkills">
        <ProgramLanguages />
        <Frameworks />
        <OtherTools />
      </List>
    </div>
  );
};
