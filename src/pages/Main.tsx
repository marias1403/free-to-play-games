/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { FC, useEffect, useState } from 'react';
import { Layout, Pagination, Space } from 'antd';
import type { PaginationProps } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import GameListHeader from '../components/GameListHeader';
import FooterComponent from '../components/FooterComponent';
import GameCardList from '../components/GameCardList';
import { IGameCard } from '../types/types';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import gamesSelector from '../features/game-list/selectors';
import { fetchGameList } from '../features/game-list/slice';

const { Content } = Layout;

const Main: FC = () => {
  const [games, setGames] = useState<IGameCard[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const selectedGames = useAppSelector(gamesSelector);
  const dispatch = useAppDispatch();

  const itemsPerPage = 9;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay: IGameCard[] = games.slice(startIndex, endIndex);

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
  };

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
          <GameCardList games={itemsToDisplay} />
          <Pagination
            style={{ marginTop: 50 }}
            current={currentPage}
            onChange={onChange}
            total={games.length}
            pageSize={itemsPerPage}
            showSizeChanger={false}
            showTotal={(total) => `Найдено всего: ${total}`} />
        </Content>
        <FooterComponent />
      </Layout>
    </Space>
  );
};

export default Main;
