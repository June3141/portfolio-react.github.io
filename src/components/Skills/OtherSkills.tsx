import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';

const skillData: Array<{ name: string }> = [
  { name: 'TOEIC score 700 (2016年 6月取得)' },
  { name: '第一種普通自動車運転免許 (2014年 4月取得)' },
  { name: '数学検定３級 (2009年)' },
];

export const OtherSkills: React.FC = () => {
  return (
    <div className="OtherSkills">
      <Typography> その他のスキル </Typography>
      <List>
        {skillData.map((item) => (
          <ListItem>
            <ListItemText> {item.name} </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
