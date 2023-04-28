import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import StartPage from './pages/StartPage';
import Page1  from './pages/FollowUpPage1';
import Page2 from './pages/FollowUpPage2';
import Page3 from './pages/FollowUpPage3';
import Page4 from './pages/FollowUpPage4';
import Page5 from './pages/FollowUpPage5';
import Page6 from './pages/FollowUpPage6';


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/Page-1" element={<Page1 />} />
      <Route path="/Page-2" element={<Page2 />} />
      <Route path="/Page-3" element={<Page3 />} />
      <Route path="/Page-4" element={<Page4 />} />
      <Route path="/Page-5" element={<Page5 />} />
      <Route path="/Page-6" element={<Page6 />} />
    </Routes>
  </BrowserRouter>
  
);

export default App;