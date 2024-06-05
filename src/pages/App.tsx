import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './app.css';

import { Home } from './Home'
import { NewsDetail } from './NewsDetail'

const App = () => (
  <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<NewsDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
);

export default App;
