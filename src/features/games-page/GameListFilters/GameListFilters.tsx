/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { FC, useState } from 'react';
import { FilterOutlined } from '@ant-design/icons';
import { Col, Row, Typography, Select, Button } from 'antd';
import { useAppDispatch } from '../../../hooks/hooks';
import { fetchGameListByFilters } from '../slice';
import styles from './GameListFilters.module.css';
import { IFilterParamsState } from '../../../types/types';

const { Text } = Typography;

const GameListFilters: FC = () => {
  const [filterParams, setFilterParams] = useState<IFilterParamsState>({
    category: undefined,
    platform: undefined,
    sortBy: undefined,
  });
  const dispatch = useAppDispatch();

  const handlePlatformFilterChange = (value: string) => {
    const newFilterParams = { ...filterParams, platform: value };
    setFilterParams(newFilterParams);
  };

  const handleGenreFilterChange = (value: string) => {
    const newFilterParams = { ...filterParams, category: value };
    setFilterParams(newFilterParams);
  };

  const handleSortChange = (value: string) => {
    const newFilterParams = { ...filterParams, sortBy: value };
    setFilterParams(newFilterParams);
  };

  const handleFilterButtonClick = () => {
    dispatch(fetchGameListByFilters(filterParams));
  };

  return (
    <Row
      justify='start'
      align='middle'
      gutter={[40, 20]}
      className={styles.row}>
      <Col>
        <Text strong className={styles.text}>По платформе</Text>
        <Select
          allowClear
          placeholder='Не выбрано'
          className={styles.select}
          onChange={handlePlatformFilterChange}
          options={[
            { value: 'pc', label: 'PC (Windows)' },
            { value: 'browser', label: 'Web Browser' },
          ]} />
      </Col>
      <Col>
        <Text strong className={styles.text}>По жанру</Text>
        <Select
          allowClear
          placeholder='Не выбрано'
          className={styles.select}
          onChange={handleGenreFilterChange}
          options={[
            { value: 'mmo', label: 'MMO' },
            { value: 'mmorpg', label: 'MMORPG' },
            { value: 'shooter', label: 'Shooter' },
            { value: 'strategy', label: 'Strategy' },
            { value: 'moba', label: 'Moba' },
            { value: 'card-games', label: 'Card Games' },
            { value: 'racing', label: 'Racing' },
            { value: 'sports', label: 'Sports' },
            { value: 'social', label: 'Social' },
            { value: 'fighting', label: 'Fighting' },
          ]} />
      </Col>
      <Col>
        <Text strong className={styles.text}>Сортировка</Text>
        <Select
          allowClear
          placeholder='Не выбрано'
          className={styles.select}
          onChange={handleSortChange}
          options={[
            { value: 'relevance', label: 'По релевантности' },
            { value: 'popularity', label: 'По популярности' },
            { value: 'release-date', label: 'По дате релиза' },
            { value: 'alphabetical', label: 'По названию' },
          ]} />
      </Col>
      <Col>
        <Button
          type='primary'
          onClick={handleFilterButtonClick}
          icon={<FilterOutlined />}>
          Применить фильтры
        </Button>
      </Col>
    </Row>
  );
};

export default GameListFilters;
