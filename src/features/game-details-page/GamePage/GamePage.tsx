/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Layout, Space, Row, Col, Button, Typography, Empty } from 'antd';
import styles from './GamePage.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import gameDetailsSelector from '../selectors';
import { fetchGame } from '../slice';
import { IGameDetails } from '../../../types/types';
import HeaderComponent from '../../../components/HeaderComponent/HeaderComponent';
import ScreenshotsCarousel from '../ScreenshotsCarousel/ScreenshotsCarousel';
import GameSystemRequirements from '../GameSystemRequirements/GameSystemRequirements';
import FooterComponent from '../../../components/FooterComponent/FooterComponent';
import Loader from '../../../components/Loader/Loader';
import Error from '../../../components/ErrorComponent/ErrorComponent';
import RussianDateFormatter from '../../../components/RussianDateFormatter/RussianDateFormatter';

const { Content } = Layout;
const { Title, Text } = Typography;

const GamePage: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [gameDetails, setGameDetails] = useState<IGameDetails>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const selectedGame = useAppSelector(gameDetailsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchGame(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    setLoading(selectedGame.loading);
    setError(selectedGame.error);
    setGameDetails(selectedGame.game);
  }, [selectedGame]);

  useEffect(() => {
    const savedGameDetails = localStorage.getItem('gameDetails');
    if (savedGameDetails) {
      const parsedGameDetails: IGameDetails = JSON.parse(savedGameDetails) as IGameDetails;
      setGameDetails(parsedGameDetails);
    }
  }, []);

  useEffect(() => {
    if (gameDetails) {
      localStorage.setItem('gameDetails', JSON.stringify(gameDetails));
      const deleteTimer = setTimeout(() => {
        localStorage.removeItem('gameDetails');
      }, 5 * 60 * 1000);
      return () => clearTimeout(deleteTimer);
    }
  }, [gameDetails]);

  if (loading) {
    return <Loader />;
  }

  if (!gameDetails) {
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
          <Button
            onClick={() => navigate('/')}
            className={styles.backButton}
            type='link'
            icon={<ArrowLeftOutlined />}>
            К главной
          </Button>
          <Row gutter={{ xs: 0, sm: 0, md: 0, lg: 70 }} justify='space-between'>
            <Col className={styles.imageCol} xs={24} sm={24} md={24} lg={12} xl={12}>
              <img
                className={styles.gameImage}
                src={gameDetails.thumbnail}
                alt={gameDetails.title} />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Title level={1} className={styles.title}>
                {gameDetails.title}
              </Title>
              <Text type='secondary'>Дата релиза</Text>
              <RussianDateFormatter isDetails dateString={gameDetails.release_date} />
              <Text type='secondary'>Жанр</Text>
              <Title level={5} style={{ margin: '0 0 20px' }}>
                {gameDetails.genre}
              </Title>
              <Text type='secondary'>Разработчик</Text>
              <Title level={5} style={{ margin: '0 0 20px' }}>
                {gameDetails.developer}
              </Title>
              <Text type='secondary'>Издатель</Text>
              <Title level={5} style={{ margin: '0 0 20px' }}>
                {gameDetails.publisher}
              </Title>
              <Title level={3}>Скриншоты</Title>
              <ScreenshotsCarousel screenshots={gameDetails.screenshots ?? []} />
              <Title level={3}>
                Системные требования
              </Title>
              <GameSystemRequirements
                requirements={gameDetails.minimum_system_requirements} />
            </Col>
          </Row>
        </Content>
        <FooterComponent />
      </Layout>
    </Space>
  );
};

export default GamePage;
