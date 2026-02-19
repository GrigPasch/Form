import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FormProvider } from './context/FormContext';

import LoginPage from '../src/pages/LoginPage';
import Page1 from '../src//pages/Page1';
import Page2 from '../src//pages/Page2';
import Page3 from '../src//pages/Page3';
import Page4 from '../src//pages/Page4';
import Page5 from '../src//pages/Page5';
import Page6 from '../src//pages/Page6';

const App: React.FC = () => (
  <BrowserRouter>
    <FormProvider>
      <Routes>
        <Route path="/"        element={<LoginPage />} />
        <Route path="/page-1"  element={<Page1 />} />
        <Route path="/page-2"  element={<Page2 />} />
        <Route path="/page-3"  element={<Page3 />} />
        <Route path="/page-4"  element={<Page4 />} />
        <Route path="/page-5"  element={<Page5 />} />
        <Route path="/page-6"  element={<Page6 />} />
      </Routes>
    </FormProvider>
  </BrowserRouter>
);

export default App;