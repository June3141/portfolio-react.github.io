import React from 'react';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const skillData: Array<{ name: string }> = [
  { name: 'TOEIC score 700 (2016年 6月取得)' },
  { name: '第一種普通自動車運転免許 (2014年 4月取得)' },
  { name: '数学検定３級 (2009年)' },
];

export const ProgramingSkills: React.FC = () => {
  return (
    <div className="ProgramingSkills">
      <Typography> プログラミング関連 </Typography>
      <List className="OtherSkills">
        {skillData.map((item) => (
          <ListItem>
            <ListItemText> {item.name} </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
