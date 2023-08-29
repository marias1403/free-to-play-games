import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Typography, Tag, Row, Col } from 'antd';
import { IGameCard } from '../../types/types';
import RussianDateFormatter from '../../components/RussianDateFormatter/RussianDateFormatter';

const { Title, Text } = Typography;

const GameCard: FC<{ id: number, game: IGameCard }> = ({ id, game }) => {
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`/${id}`);
  };

  return (
    <Card onClick={onCardClick} hoverable cover={<img alt={game.title} src={game.thumbnail} />}>
      <Row justify='space-between'>
        <Col>
          <Title level={4} style={{ margin: 0 }}>{game.title}</Title>
        </Col>
        <Col>
          <Tag style={{ margin: 0 }}>{game.genre}</Tag>
        </Col>
      </Row>
      <Row justify='space-between'>
        <Col>
          <Text>Издатель: </Text>
          <Text strong>{game.publisher}</Text>
        </Col>
        <Col>
          <RussianDateFormatter isDetails={false} dateString={game.release_date} />
        </Col>
      </Row>
    </Card>
  );
};

export default GameCard;
