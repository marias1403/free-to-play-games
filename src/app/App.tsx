import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import GamesPage from '../features/games-page/GamesPage/GamesPage';
import GamePage from '../features/game-details-page/GamePage';

const App = () => (
  <Layout style={{ height: '100vh', backgroundColor: '#ffffff' }}>
    <Suspense>
      <Routes>
        <Route path='/' element={<GamesPage />} />
        <Route path='/:id' element={<GamePage />} />
      </Routes>
    </Suspense>
  </Layout>
);

export default App;
