import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BirdListPage from './pages/BirdList/BirdList.page';
import RecordListPage from './pages/RecordList/RecordList.page';
import TopPage from './pages/Top/Top.page';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/records" element={<RecordListPage />} />
      <Route path="/birds" element={<BirdListPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
