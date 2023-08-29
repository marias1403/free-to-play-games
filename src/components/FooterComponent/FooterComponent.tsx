import React, { FC } from 'react';
import { Layout, Typography } from 'antd';
import styles from './FooterComponent.module.css';

const { Footer } = Layout;
const { Text } = Typography;

const FooterComponent: FC = () => (
  <Footer className={styles.footer}>
    <Text type='secondary'>Мария Архипова, 2023</Text>
  </Footer>
);

export default FooterComponent;
