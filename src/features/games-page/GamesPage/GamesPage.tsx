/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { FC, useEffect, useState } from 'react';
import { Empty, Layout, Space } from 'antd';
import styles from './GamesPage.module.css';
import HeaderComponent from '../../../components/HeaderComponent/HeaderComponent';
import GameListFilters from '../GameListFilters/GameListFilters';
import FooterComponent from '../../../components/FooterComponent/FooterComponent';
import GameCardList from '../GameCardList/GameCardList';
import { IGameCard } from '../../../types/types';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import gamesSelector from '../selectors';
import { fetchGameList } from '../slice';
import Loader from '../../../components/Loader/Loader';
import Error from '../../../components/ErrorComponent/ErrorComponent';
import PaginationComponent from '../PaginationComponent/PaginationComponent';

const { Content } = Layout;

const GamesPage: FC = () => {
  const [games, setGames] = useState<IGameCard[]>([]);
  const [itemsToDisplay, setItemsToDisplay] = useState<IGameCard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const selectedGames = useAppSelector(gamesSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGameList());
  }, [dispatch]);

  useEffect(() => {
    setLoading(selectedGames.loading);
    setError(selectedGames.error);
    setGames(selectedGames.games);
  }, [selectedGames]);

  if (!games) {
    return <Empty style={{ margin: 'auto' }} />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Space
      direction='vertical'
      className={styles.space}>
      <Layout className={styles.layout}>
        <HeaderComponent />
        <Content className={styles.content}>
          <GameListFilters />
          {
            loading ? <Loader /> : <GameCardList games={itemsToDisplay} />
          }
          <PaginationComponent
            games={games}
            total={games.length}
            onSetItemsToDisplay={setItemsToDisplay} />
        </Content>
        <FooterComponent />
      </Layout>
    </Space>
  );
};

export default GamesPage;
