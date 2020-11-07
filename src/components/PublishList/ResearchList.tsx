import { Link } from '@material-ui/core';
import React from 'react';

const itemList: Array<{ name: string; url: string }> = [
  {
    name:
      'Kazusa Beppu, Ziane Izri, Jun Gohya, Kanta Eto, Masatoshi Ichikawa and Yusuke T. Maeda, "Geometry-driven collective ordering of bacterial vortices", <i> Soft Matter </i>, 2017, <b> 13 </b> , 5038-5043',
    url:
      'https://pubs.rsc.org/en/content/articlelanding/2017/sm/c7sm00999b#!divAbstract',
  },
  {
    name:
      ' 合屋 純, 別府 航早, 口頭発表「群れる生命の謎を追え！：細胞集団に学ぶ自己組織化の原理」文部科学省主催第6回サイエンス・インカレ 数物・化学系 2017年3月',
    url: 'http://www.mext.go.jp/b_menu/houdou/29/03/1383477.html',
  },
];
const makeList = (item: { name: string; url: string }) => {
  return (
    <li>
      <Link href={item.url}>{item.name}</Link>
    </li>
  );
};

export const ResearchList: React.FC = () => {
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
