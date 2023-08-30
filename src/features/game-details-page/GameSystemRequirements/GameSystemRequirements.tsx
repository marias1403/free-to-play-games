import React, { FC } from 'react';
import { Typography, Empty } from 'antd';
import { IGameSystemRequirementsProps } from '../../../types/types';
import styles from './GameSystemRequirements.module.css';

const { Title, Text } = Typography;

const GameSystemRequirements: FC<{
  requirements: IGameSystemRequirementsProps
}> = ({ requirements }) => {
  if (!requirements) {
    return (
      <div className={styles.noContent}>
        <Empty />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Text type='secondary'>OS</Text>
      <Title level={5} style={{ margin: '0 0 20px' }}>
        {requirements.os && requirements.os !== '?' ? requirements.os : 'нет информации'}
      </Title>
      <Text type='secondary'>Processor</Text>
      <Title level={5} style={{ margin: '0 0 20px' }}>
        {requirements.processor && requirements.processor !== '?' ? requirements.processor : 'нет информации'}
      </Title>
      <Text type='secondary'>Memory</Text>
      <Title level={5} style={{ margin: '0 0 20px' }}>
        {requirements.memory && requirements.memory !== '?' ? requirements.memory : 'нет информации'}
      </Title>
      <Text type='secondary'>Graphics</Text>
      <Title level={5} style={{ margin: '0 0 20px' }}>
        {requirements.graphics && requirements.graphics !== '?' ? requirements.graphics : 'нет информации'}
      </Title>
      <Text type='secondary'>Storage</Text>
      <Title level={5} style={{ margin: '0 0 20px' }}>
        {requirements.storage && requirements.storage !== '?' ? requirements.storage : 'нет информации'}
      </Title>
    </div>
  );
};

export default GameSystemRequirements;
