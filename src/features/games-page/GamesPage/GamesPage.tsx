/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { FC, useEffect, useState } from 'react';
import { Empty, Layout, Pagination, Space } from 'antd';
import type { PaginationProps } from 'antd';
import styles from './GamesPage.module.css';
import HeaderComponent from '../../../components/HeaderComponent/HeaderComponent';
import GameListHeader from '../GameListHeader';
import FooterComponent from '../../../components/FooterComponent/FooterComponent';
import GameCardList from '../GameCardList';
import { IGameCard } from '../../../types/types';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import gamesSelector from '../selectors';
import { fetchGameList } from '../slice';
import Loader from '../../../components/Loader/Loader';
import Error from '../../../components/ErrorComponent/ErrorComponent';

const { Content } = Layout;

const GamesPage: FC = () => {
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
  }, [dispatch]);

  useEffect(() => {
    setLoading(selectedGames.loading);
    setError(selectedGames.error);
    setGames(selectedGames.games);
  }, [selectedGames]);

  if (loading) {
    return <Loader />;
  }

  if (!games) {
    return <Empty style={{ margin: 'auto' }} />;
  }

  if (error) {
    return <Error />;
  }

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
        <HeaderComponent isDetails={false} />
        <Content className={styles.content}>
          <GameListHeader />
          <GameCardList games={itemsToDisplay} />
          <Pagination
            style={{ marginTop: 50 }}
            current={currentPage}
            onChange={onChange}
            total={games.length}
            pageSize={itemsPerPage}
            showSizeChanger={false} />
        </Content>
        <FooterComponent />
      </Layout>
    </Space>
  );
};

export default GamesPage;
