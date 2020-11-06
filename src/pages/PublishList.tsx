import React from 'react';

import { PublishListItem } from '../components/PublishList/PublishListItme';

export const PublishList: React.FC = () => {
  return (
    <div className="PublishList">
      <h2>hallo, this is PublishList.</h2>
      <PublishListItem />
    </div>
  );
};
