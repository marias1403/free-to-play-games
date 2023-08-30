import React, { FC } from 'react';
import { Layout } from 'antd';
import styles from './HeaderComponent.module.css';
import logoImg from '../../assets/images/logo.svg';

const { Header } = Layout;

const HeaderComponent: FC = () => (
  <Header className={styles.header}>
    <img height={33} width={175} src={logoImg} alt='Логотип' />
  </Header>
);

export default HeaderComponent;
