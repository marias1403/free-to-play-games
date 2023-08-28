import React, { FC } from 'react';
import { Col, Row, Typography, Select } from 'antd';

const { Title } = Typography;

const GameListHeader: FC = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Row justify='space-between' align='middle' style={{ margin: '30px 0' }}>
      <Col>
        <Title level={3} style={{ margin: 0 }}>Все игры</Title>
      </Col>
      <Col>
        <Select
          defaultValue='По умолчанию'
          style={{ width: 220 }}
          onChange={handleChange}
          options={[
            { value: 'default', label: 'По умолчанию' },
            { value: 'name', label: 'По названию' },
            { value: 'date', label: 'По дате релиза' },
            { value: 'popular', label: 'По популярности' },
          ]} />
      </Col>
    </Row>
  );
};

export default GameListHeader;
