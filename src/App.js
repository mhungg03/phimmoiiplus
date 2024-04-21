import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import Body2 from './components/Body/Body2';
import Body3 from './components/Body/Body3';
import Body4 from './components/Body/Body4';
import BodyDetail from './components/Body/BodyDetail';
import BodyWatch from './components/Body/BodyWatch';
import BodyList from './components/Body/BodyList';
import Category from './components/Body/Category';
import Country from './components/Body/Country';
import Year from './components/Body/Year';
import Search from './components/Body/Search';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<><Body /> <Body2 /> <Body3 /><Body4 /></>} />
          <Route path="/info/:slug" element={<BodyDetail />} />
          <Route path="/watch/:slug" element={<BodyWatch />} />
          <Route path="/list/:slug" element={<BodyList />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/country/:slug" element={<Country />} />
          <Route path="/year/:slug" element={<Year />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
