import React, { FC } from 'react';
import { List } from 'antd';
import GameCard from './GameCard';
import { IGameCard } from '../../types/types';

const GameCardList: FC<{
  games: IGameCard[] | undefined,
}> = ({ games }) => (
  <List
    grid={{
      gutter: 40,
      xs: 1,
      sm: 1,
      md: 1,
      lg: 2,
      xl: 3,
      xxl: 4,
    }}
    style={{ width: '100%' }}
    dataSource={games}
    renderItem={(game) => (
      <List.Item>
        <GameCard id={game.id} game={game} />
      </List.Item>
    )} />
);

export default GameCardList;
