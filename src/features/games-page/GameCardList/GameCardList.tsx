import React, { FC } from 'react';
import { List } from 'antd';
import GameCard from '../GameCard/GameCard';
import { IGameCard } from '../../../types/types';
import styles from './GameCardList.module.css';

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
    className={styles.list}
    dataSource={games}
    renderItem={(game) => (
      <List.Item>
        <GameCard id={game.id} game={game} />
      </List.Item>
    )} />
);

export default GameCardList;
