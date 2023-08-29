import React, { FC, useState } from 'react';
import { Layout, Input, TreeSelect, Row, Col } from 'antd';
import styles from './HeaderComponent.module.css';
import logoImg from '../../assets/images/logo.svg';

const { Header } = Layout;
const { Search } = Input;

const treeData = [
  {
    value: 'platform',
    title: 'Платформа',
    disabled: true,
    children: [
      {
        value: 'windows',
        title: 'Windows',
      },
      {
        value: 'macos',
        title: 'MacOS',
      },
    ],
  },
  {
    value: 'genre',
    title: 'Жанр',
    disabled: true,
    children: [
      {
        value: 'mmorpg',
        title: 'MMORPG',
      },
      {
        value: 'shooter',
        title: 'Shooter',
      },
      {
        value: 'moba',
        title: 'MOBA',
      },
      {
        value: 'anime',
        title: 'Anime',
      },
      {
        value: 'strategy',
        title: 'Strategy',
      },
      {
        value: 'fantasy',
        title: 'Fantasy',
      },
      {
        value: 'sci-fi',
        title: 'Sci-Fi',
      },
      {
        value: 'card-games',
        title: 'Card Games',
      },
      {
        value: 'racing',
        title: 'Racing',
      },
      {
        value: 'fighting',
        title: 'Fighting',
      },
      {
        value: 'social',
        title: 'Social',
      },
      {
        value: 'sports',
        title: 'Sports',
      },
      {
        value: 'battle-royale',
        title: 'Battle Royale',
      },
    ],
  },
];

const HeaderComponent: FC<{ isDetails: boolean }> = ({ isDetails }) => {
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <Header className={styles.header}>
      <img height={33} width={175} src={logoImg} alt='Логотип' />
      <Row
        gutter={15}
        style={{ display: isDetails ? 'none' : 'flex' }}
        className={styles.row}>
        <Col span={6}>
          <TreeSelect
            showSearch
            className={styles.treeSelect}
            value={value}
            dropdownStyle={{ overflow: 'auto' }}
            placeholder='Фильтр'
            allowClear
            multiple
            treeDefaultExpandAll
            onChange={onChange}
            treeData={treeData} />
        </Col>
        <Col span={18}>
          <Search
            className={styles.search}
            placeholder='Поиск по играм'
            enterButton='Поиск' />
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderComponent;
