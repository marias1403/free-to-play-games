import React, { FC } from 'react';
import { Layout, Typography } from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

const footerStyle: React.CSSProperties = {
  marginTop: 100,
  padding: '20px 50px 60px',
  textAlign: 'center',
  color: '#000000',
  backgroundColor: '#EEEEEE',
};

const FooterComponent: FC = () => (
  <Footer style={footerStyle}>
    <Text type='secondary'>Мария Архипова, 2023</Text>
  </Footer>
);

export default FooterComponent;
