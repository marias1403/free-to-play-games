import React, { FC } from 'react';
import { Typography, Empty } from 'antd';
import { IGameSystemRequirementsProps } from '../../types/types';

const { Title, Text } = Typography;

const titleStyle: React.CSSProperties = {
  margin: '0 0 20px',
};

const noContentStyle: React.CSSProperties = {
  width: 250,
  height: 150,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const GameSystemRequirements: FC<{
  requirements: IGameSystemRequirementsProps
}> = ({ requirements }) => {
  if (!requirements) {
    return (
      <div style={noContentStyle}>
        <Empty />
      </div>
    );
  }

  return (
    <>
      <Text type='secondary'>OS</Text>
      <Title level={5} style={titleStyle}>
        {requirements.os && requirements.os !== '?' ? requirements.os : 'нет информации'}
      </Title>
      <Text type='secondary'>Processor</Text>
      <Title level={5} style={titleStyle}>
        {requirements.processor && requirements.processor !== '?' ? requirements.processor : 'нет информации'}
      </Title>
      <Text type='secondary'>Memory</Text>
      <Title level={5} style={titleStyle}>
        {requirements.memory && requirements.memory !== '?' ? requirements.memory : 'нет информации'}
      </Title>
      <Text type='secondary'>Graphics</Text>
      <Title level={5} style={titleStyle}>
        {requirements.graphics && requirements.graphics !== '?' ? requirements.graphics : 'нет информации'}
      </Title>
      <Text type='secondary'>Storage</Text>
      <Title level={5} style={titleStyle}>
        {requirements.storage && requirements.storage !== '?' ? requirements.storage : 'нет информации'}
      </Title>
    </>
  );
};

export default GameSystemRequirements;
