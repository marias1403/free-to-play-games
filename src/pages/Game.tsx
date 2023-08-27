import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Layout, Space, Row, Col, Button, Typography } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import ScreenshotsCarousel from '../components/ScreenshotsCarousel';
import FooterComponent from '../components/FooterComponent';
import gameImage from '../assets/images/game-cover.png';

const { Content, Footer } = Layout;
const { Title, Text } = Typography;

const imageColStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: 12,
};

const titleStyle: React.CSSProperties = {
  margin: '0 0 30px',
};

const Game: FC = () => {
  const navigate = useNavigate();

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
            style={{ padding: 0, margin: '30px 0' }}
            type='link'
            icon={<ArrowLeftOutlined />}>
            К главной
          </Button>
          <Row gutter={70} justify='space-between'>
            <Col style={imageColStyle} span={10}>
              <img
                style={{ borderRadius: 8, width: '100%', height: 400 }}
                src={gameImage}
                alt='Картинка игры' />
            </Col>
            <Col span={14}>
              <Title level={1} style={titleStyle}>
                Palia
              </Title>
              <Row gutter={120}>
                <Col>
                  <Text type='secondary'>Дата релиза</Text>
                  <Title level={5} style={titleStyle}>
                    10 августа 2023
                  </Title>
                  <Text type='secondary'>Издатель</Text>
                  <Title level={5} style={titleStyle}>
                    Singularity Six
                  </Title>
                </Col>
                <Col>
                  <Text type='secondary'>Жанр</Text>
                  <Title level={5} style={titleStyle}>
                    MMORPG
                  </Title>
                  <Text type='secondary'>Разработчик</Text>
                  <Title level={5} style={titleStyle}>
                    Singularity Six
                  </Title>
                </Col>
              </Row>
              <Title level={3}>Скриншоты</Title>
              <ScreenshotsCarousel />
              <Title level={3}>
                Системные требования
              </Title>
              <Text type='secondary'>OS</Text>
              <Title level={5} style={titleStyle}>
                Windows 10 64-bit or higher
              </Title>
              <Text type='secondary'>Processor</Text>
              <Title level={5} style={titleStyle}>
                Intel Core i5-4670K / AMD FX-8350 CPU or equivalent
              </Title>
              <Text type='secondary'>Memory</Text>
              <Title level={5} style={titleStyle}>
                4GB
              </Title>
              <Text type='secondary'>Graphics</Text>
              <Title level={5} style={titleStyle}>
                GeForce GTX 660 / Radeon R9 270 or equivalent
              </Title>
              <Text type='secondary'>Storage</Text>
              <Title level={5} style={titleStyle}>
                16GB
              </Title>
              <Text type='secondary'>Additional Notes</Text>
              <Title level={5} style={titleStyle}>
                Specifications may change during development
              </Title>
            </Col>
          </Row>
        </Content>
        <FooterComponent />
      </Layout>
    </Space>
  );
};

export default Game;
