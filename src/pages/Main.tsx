/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { FC, useEffect, useState } from 'react';
import { Layout, Space } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import GameListHeader from '../components/GameListHeader';
import PaginationComponent from '../components/PaginationComponent';
import FooterComponent from '../components/FooterComponent';
import GameCardList from '../components/GameCardList';
import { IGameCard } from '../types/types';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import gamesSelector from '../features/game-list/selectors';
import { fetchGameList } from '../features/game-list/slice';

const { Content, Footer } = Layout;

const Main: FC = () => {
  const [games, setGames] = useState<IGameCard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const selectedGames = useAppSelector(gamesSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGameList());
  }, []);

  useEffect(() => {
    setLoading(selectedGames.loading);
    setError(selectedGames.error);
    setGames(selectedGames.games);
  }, [selectedGames]);
  return (
    <Space
      direction='vertical'
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
      }}>
      <Layout
        style={{
          minHeight: '100vh',
          display: 'flex',
          backgroundColor: '#ffffff',
        }}>
        <HeaderComponent />
        <Content style={{ paddingInline: 50 }}>
          <GameListHeader />
          <GameCardList games={games} />
          <PaginationComponent />
        </Content>
        <FooterComponent />
      </Layout>
    </Space>
  );
};

export default Main;
