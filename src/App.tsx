import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/ui/global/Header';
import Footer from './components/ui/global/Footer';
import Home from './components/page/Home';
import RecordList from './components/page/RecordList';
import RecordEdit from './components/page/RecordEdit';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/records" element={<RecordList />} />
          <Route path="/records/:recordId/edit" element={<RecordEdit />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
