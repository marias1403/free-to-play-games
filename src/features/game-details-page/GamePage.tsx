/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Layout, Space, Row, Col, Button, Typography, Empty } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import gameDetailsSelector from './selectors';
import { fetchGame } from './slice';
import { IGameDetails } from '../../types/types';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import ScreenshotsCarousel from './ScreenshotsCarousel';
import GameSystemRequirements from './GameSystemRequirements';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import RussianDateFormatter from '../../components/RussianDateFormatter';

const { Content } = Layout;
const { Title, Text } = Typography;

const imageColStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: 12,
};

const titleStyle: React.CSSProperties = {
  margin: '0 0 20px',
};

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

  console.log(gameDetails);

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
          <Button
            onClick={() => navigate('/')}
            style={{ padding: 0, margin: '30px 0 20px' }}
            type='link'
            icon={<ArrowLeftOutlined />}>
            К главной
          </Button>
          <Row gutter={70} justify='space-between'>
            <Col style={imageColStyle} span={10}>
              <img
                style={{
                  borderRadius: 8,
                  width: '100%',
                  height: 400,
                  objectFit: 'cover',
                }}
                src={gameDetails.thumbnail}
                alt={gameDetails.title} />
            </Col>
            <Col span={14}>
              <Title level={1} style={titleStyle}>
                {gameDetails.title}
              </Title>
              <Row gutter={120}>
                <Col>
                  <Text type='secondary'>Дата релиза</Text>
                  <RussianDateFormatter details dateString={gameDetails.release_date} />
                  <Text type='secondary'>Издатель</Text>
                  <Title level={5} style={titleStyle}>
                    {gameDetails.publisher}
                  </Title>
                </Col>
                <Col>
                  <Text type='secondary'>Жанр</Text>
                  <Title level={5} style={titleStyle}>
                    {gameDetails.genre}
                  </Title>
                  <Text type='secondary'>Разработчик</Text>
                  <Title level={5} style={titleStyle}>
                    {gameDetails.developer}
                  </Title>
                </Col>
              </Row>
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
