import React, { FC } from 'react';
import { Card, Typography, Tag, Row, Col } from 'antd';
import gameCover from '../assets/images/game-cover.png';

const { Title, Text } = Typography;

const GameCard: FC = () => (
  <Card hoverable cover={<img alt='Обложка игры' src={gameCover} />}>
    <Row justify='space-between'>
      <Col>
        <Title level={4} style={{ margin: 0 }}>Palia</Title>
      </Col>
      <Col>
        <Tag color='green'>MMORPG</Tag>
      </Col>
    </Row>
    <Row justify='space-between'>
      <Col>
        <Text>Издатель: </Text>
        <Text strong>Singularity Six</Text>
      </Col>
      <Col>
        <Text type='secondary'>August 10, 2023</Text>
      </Col>
    </Row>
  </Card>
);

export default GameCard;
