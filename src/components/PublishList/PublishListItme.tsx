import React from 'react';

import { BlogList } from './BlogList';
import { ResearchList } from './ResearchList';

export const PublishListItem: React.FC = () => {
  return (
    <div className="PublishListItem">
      <BlogList />
      <ResearchList />
    </div>
  );
};
