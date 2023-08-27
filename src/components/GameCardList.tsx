import React, { FC } from 'react';
import { List } from 'antd';
import GameCard from './GameCard';

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

const GameCardList: FC = () => (
  <List
    grid={{ gutter: 40, column: 3 }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <GameCard />
      </List.Item>
    )} />
);

export default GameCardList;
