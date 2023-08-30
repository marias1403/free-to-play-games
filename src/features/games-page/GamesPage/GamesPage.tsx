/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { FC, useEffect, useState } from 'react';
import { Empty, Layout, Pagination, Space } from 'antd';
import type { PaginationProps } from 'antd';
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

const { Content } = Layout;

const GamesPage: FC = () => {
  const [games, setGames] = useState<IGameCard[]>([]);

  const currentPageFromLocalStorage = localStorage.getItem('currentPage');
  const initialPage = currentPageFromLocalStorage ? parseInt(currentPageFromLocalStorage, 10) : 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const selectedGames = useAppSelector(gamesSelector);
  const dispatch = useAppDispatch();

  const itemsPerPage = 9;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay: IGameCard[] = games.slice(startIndex, endIndex);

  const onPageChange: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
    localStorage.setItem('currentPage', page.toString());
  };

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
          <Pagination
            style={{ marginTop: 50 }}
            current={currentPage}
            onChange={onPageChange}
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
