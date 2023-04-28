import * as React from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import './Footer.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Props {
  pageNum: string;
}

const PAGE_ROUTES = ['/page-1', '/page-2', '/page-3', '/page-4', '/page-5', '/page-6', '/'];

const Footer: React.FC<Props> = ({ pageNum }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  useEffect(() => {
    setCurrentPageIndex(PAGE_ROUTES.indexOf(location.pathname));
  }, [location.pathname]);

  const navigateToNextPage = () => {
    const nextPageIndex = (currentPageIndex + 1) % PAGE_ROUTES.length;
    navigate(PAGE_ROUTES[nextPageIndex]);
  };

while(PAGE_ROUTES.indexOf(location.pathname) === PAGE_ROUTES.indexOf('/Page-6)')){
  return  <div className={`foo ${pageNum}`} id='foot'>
            <div>
              <p>
                <AiFillQuestionCircle /> <span style={{ textDecorationLine: 'underline' }}>Help</span>
              </p>
            </div>
            <div>
              <button type='button' onClick={navigateToNextPage}>
                Finish
              </button>
            </div>
          </div>
}
  return (
    <div className={`foo ${pageNum}`} id='foot'>
      <div>
        <p>
          <AiFillQuestionCircle /> <span style={{ textDecorationLine: 'underline' }}>Help</span>
        </p>
      </div>
      <div>
        <button type='button' onClick={navigateToNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Footer;