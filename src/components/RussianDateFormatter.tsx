import React, { FC } from 'react';
import { Typography } from 'antd';
import { format } from 'date-fns';
import { IDateFormatterProps } from '../types/types';

const { Title, Text } = Typography;

const titleStyle: React.CSSProperties = {
  margin: '0 0 20px',
};

const RussianDateFormatter: FC<IDateFormatterProps> = ({ details, dateString }) => {
  let date: Date;
  if (typeof dateString === 'string' || typeof dateString === 'number') {
    date = new Date(dateString);
  } else {
    date = dateString;
  }
  const russianDateFormat = format(date, 'dd.MM.yyyy');
  if (details) {
    return <Title level={5} style={titleStyle}>{russianDateFormat}</Title>;
  }
  return <Text type='secondary'>{russianDateFormat}</Text>;
};

export default RussianDateFormatter;
