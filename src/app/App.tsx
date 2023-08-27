import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Main from '../pages/Main';
import Game from '../pages/Game';

const App = () => (
  <Layout style={{ height: '100vh', backgroundColor: '#ffffff' }}>
    <Suspense>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </Suspense>
  </Layout>
);

export default App;
