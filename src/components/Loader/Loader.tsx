import React, { FC } from 'react';
import { Spin } from 'antd';
import styles from './Loader.module.css';

const Loader: FC = () => (
  <div className={styles.loaderWrapper}>
    <Spin tip='Загрузка...' size='large'>
      <div className='content' />
    </Spin>
  </div>
);

export default Loader;
