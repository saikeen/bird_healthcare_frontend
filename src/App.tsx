import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BirdListPage from './components/page/BirdList/BirdList.page';
import RecordListPage from './components/page/RecordList/RecordList.page';
import TopPage from './components/page/Top/Top.page';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/records" element={<RecordListPage />} /> 
      <Route path= "/birds" element={<BirdListPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
