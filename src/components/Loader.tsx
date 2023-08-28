import React, { FC } from 'react';
import { Spin } from 'antd';

export const loaderWrapperStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  zIndex: 100,
};

const Loader: FC = () => (
  <div style={loaderWrapperStyle}>
    <Spin tip='Загрузка...' size='large'>
      <div className='content' />
    </Spin>
  </div>
);

export default Loader;
