import React, { FC } from 'react';
import { Typography } from 'antd';
import { format } from 'date-fns';
import { IDateFormatterProps } from '../../types/types';

const { Title, Text } = Typography;

const RussianDateFormatter: FC<IDateFormatterProps> = ({ isDetails, dateString }) => {
  let date: Date;
  if (typeof dateString === 'string' || typeof dateString === 'number') {
    date = new Date(dateString);
  } else {
    date = dateString;
  }
  const russianDateFormat = format(date, 'dd.MM.yyyy');
  if (isDetails) {
    return <Title level={5} style={{ margin: '0 0 20px' }}>{russianDateFormat}</Title>;
  }
  return <Text type='secondary'>{russianDateFormat}</Text>;
};

export default RussianDateFormatter;
