import React, { FC } from 'react';
import { Typography } from 'antd';
import styles from './ErrorComponent.module.css';
import errorImage from '../../assets/images/error-image.svg';

const { Title, Text } = Typography;

const ErrorComponent: FC = () => (
  <div className={styles.errorWrapper}>
    <img width={150} height={135} src={errorImage} alt='Ошибка при получении данных' />
    <Title level={4}>Не получилось получить данные </Title>
    <Text>Попробуйте перезагрузить страницу</Text>
  </div>
);

export default ErrorComponent;
