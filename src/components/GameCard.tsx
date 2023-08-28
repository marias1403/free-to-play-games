import React, { FC } from 'react';
import { Card, Typography, Tag, Row, Col } from 'antd';
import { IGameCard } from '../types/types';

const { Title, Text } = Typography;

const GameCard: FC<{ game: IGameCard }> = ({ game }) => (
  <Card hoverable cover={<img alt='Обложка игры' src={game.thumbnail} />}>
    <Row justify='space-between'>
      <Col>
        <Title level={4} style={{ margin: 0 }}>{game.title}</Title>
      </Col>
      <Col>
        <Tag>{game.genre}</Tag>
      </Col>
    </Row>
    <Row justify='space-between'>
      <Col>
        <Text>Издатель: </Text>
        <Text strong>{game.publisher}</Text>
      </Col>
      <Col>
        <Text type='secondary'>{game.release_date}</Text>
      </Col>
    </Row>
  </Card>
);

export default GameCard;
