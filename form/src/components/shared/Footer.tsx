import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const PAGE_ROUTES = ['/page-1', '/page-2', '/page-3', '/page-4', '/page-5', '/page-6'];

interface FooterProps {
  currentPage: number; // 1–6
}

const Footer: React.FC<FooterProps> = ({ currentPage }) => {
  const navigate = useNavigate();
  const isLastPage = currentPage === 6;
  const isFirstPage = currentPage === 1;

  const handleNext = () => {
    if (currentPage < 6) {
      navigate(PAGE_ROUTES[currentPage]); // currentPage is 1-based, array is 0-based, so +1 = next
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      navigate(PAGE_ROUTES[currentPage - 2]);
    } else {
      navigate('/');
    }
  };

  if (isLastPage) return null;

  return (
    <footer className="form-footer">
      <button
        type="button"
        className="form-footer__btn form-footer__btn--ghost"
        onClick={handleBack}
      >
        ← {isFirstPage ? 'Log out' : 'Back'}
      </button>
      <div className="form-footer__right">
        <span className="form-footer__progress">
          Step {currentPage} of 5
        </span>
        <button
          type="button"
          className="form-footer__btn form-footer__btn--primary"
          onClick={handleNext}
        >
          {currentPage === 5 ? 'Finish' : 'Continue'} →
        </button>
      </div>
    </footer>
  );
};

export default Footer;