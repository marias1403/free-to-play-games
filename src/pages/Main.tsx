import React, { FC } from 'react';
import { Layout, Space } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import GameListHeader from '../components/GameListHeader';
import GameCardList from '../components/GameCardList';
import PaginationComponent from '../components/PaginationComponent';
import FooterComponent from '../components/FooterComponent';

const { Content, Footer } = Layout;

const Main: FC = () => (
  <Space
    direction='vertical'
    style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#ffffff' }}>
    <Layout
      style={{
        minHeight: '100vh',
        display: 'flex',
        backgroundColor: '#ffffff' }}>
      <HeaderComponent />
      <Content style={{ paddingInline: 50 }}>
        <GameListHeader />
        <GameCardList />
        <PaginationComponent />
      </Content>
      <FooterComponent />
    </Layout>
  </Space>
);

export default Main;
