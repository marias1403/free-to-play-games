import React, { FC, useState } from 'react';
import { Layout, Input, TreeSelect, Row, Col } from 'antd';
import logoImg from '../assets/images/logo.svg';

const { Header } = Layout;
const { Search } = Input;

const headerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  color: '#fff',
  height: 100,
  paddingInline: 50,
  backgroundColor: 'transparent',
  columnGap: 100,
};

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

const HeaderComponent: FC = () => {
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Header style={headerStyle}>
      <img height={33} width={175} src={logoImg} alt='Логотип' />
      <Row gutter={15} style={{ width: '100%' }}>
        <Col span={6}>
          <TreeSelect
            showSearch
            style={{ width: '100%', verticalAlign: 'middle' }}
            value={value}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder='Фильтр'
            allowClear
            multiple
            treeDefaultExpandAll
            onChange={onChange}
            treeData={treeData} />
        </Col>
        <Col span={18}>
          <Search
            style={{ width: '100%', verticalAlign: 'middle' }}
            placeholder='Поиск по играм'
            enterButton='Поиск' />
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderComponent;
