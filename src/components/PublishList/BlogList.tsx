import React from 'react';

const itemList: Array<{ name: string; url: string }> = [
  { name: 'test', url: 'test' },
];

export const BlogList: React.FC = () => {
  return (
    <ul>
      {itemList.length < 1 ? (
        <div>no items</div>
      ) : (
        itemList.map((item) => <li>{item.name}</li>)
      )}
    </ul>
  );
};
