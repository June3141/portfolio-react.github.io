import { Link } from '@material-ui/core';
import React from 'react';

const itemList: Array<{ name: string; url: string }> = [
  {
    name: '必見!～Sysdig PoC検証レポート～',
    url: 'https://licensecounter.jp/devops-hub/blog/sysdig-poc/',
  },
  {
    name: 'インフラ初心者がKubernetesに取り組んだときの話 (前編)',
    url: 'https://note.com/shift_tech/n/n021d06e858ff',
  },
  {
    name: 'インフラ初心者が Kubernetes に取り組んでみた話（後編）',
    url: 'https://note.com/shift_tech/n/nc7a3833c3824',
  },
  {
    name: 'Rust 言語で Fizz Buzz 問題を解く',
    url: 'https://note.com/shift_tech/n/n0d2cfc5a1547',
  },
  {
    name: 'OpenShiftをAWSにUPIインストールする',
    url: 'https://note.com/shift_tech/n/na2726b15d555',
  },
  {
    name:
      'AWS 上の OpenShift (4 系) の cluster を一時停止する方法AWS 上の OpenShift (4 系) の cluster を一時停止する方法',
    url: 'https://note.com/shift_tech/n/n170fce300845',
  },
];

const makeList = (item: { name: string; url: string }) => {
  return (
    <li>
      <Link href={item.url}>{item.name}</Link>
    </li>
  );
};

export const BlogList: React.FC = () => {
  return (
    <ul>
      {itemList.length < 1 ? (
        <div>no items</div>
      ) : (
        itemList.map((item) => makeList(item))
      )}
    </ul>
  );
};
