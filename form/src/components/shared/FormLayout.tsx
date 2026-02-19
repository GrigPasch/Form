import React, { ReactNode } from 'react';
import Navbar from '../shared/Navbar';
import Sidebar from '../shared/Sidebar';
import Footer from '../shared/Footer';
import './FormLayout.css';

interface FormLayoutProps {
  currentPage: number;
  children: ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ currentPage, children }) => {
  return (
    <div className="form-layout">
      <Navbar />
      <Sidebar currentPage={currentPage} />
      <main className="form-layout__main">
        <div className="form-layout__content">
          {children}
        </div>
      </main>
      <Footer currentPage={currentPage} />
    </div>
  );
};

export default FormLayout;