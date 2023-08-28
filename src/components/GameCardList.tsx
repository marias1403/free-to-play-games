import React, { FC } from 'react';
import { List } from 'antd';
import GameCard from './GameCard';
import { IGameCard } from '../types/types';

const GameCardList: FC<{
  games: IGameCard[] | undefined,
}> = ({ games }) => (
  <List
    grid={{ gutter: 40, column: 3 }}
    dataSource={games}
    renderItem={(game) => (
      <List.Item>
        <GameCard game={game} />
      </List.Item>
    )} />
);

export default GameCardList;
