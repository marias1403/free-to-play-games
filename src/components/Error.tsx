import React, { FC } from 'react';
import { Typography } from 'antd';
import errorImage from '../assets/images/error-image.svg';

const { Title, Text } = Typography;

export const errorWrapperStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255)',
  zIndex: 100,
};

const Error: FC = () => (
  <div style={errorWrapperStyle}>
    <img width={150} height={135} src={errorImage} alt='Ошибка при получении данных' />
    <Title level={4}>Не получилось получить данные </Title>
    <Text>Попробуйте перезагрузить страницу</Text>
  </div>
);

export default Error;
