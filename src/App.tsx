import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/ui/global/Header';
import Footer from './components/ui/global/Footer';
import RecordList from './components/page/RecordList';

const App: React.FC = () => (
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecordList />} />
        <Route path="/records" element={<RecordList />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
);

export default App;
