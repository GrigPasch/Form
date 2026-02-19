import React from 'react';
import './Navbar.css';

interface NavbarProps {
    consultationNum?: number;
    consultationDate?: string;
}

const Navbar: React.FC<NavbarProps> = ({
    consultationNum = 8,
    consultationDate = '3 August 2022',
}) => {
    return (
        <header className="navbar">
            <div className="navbar__brand">
                <span className="navbar__brand-mark">✦</span>
                <span className="navbar__brand-name">HealthForm</span>
            </div>
            <div className="navbar__meta">
                <span className="navbar__consultation">
                    Consultation No. {consultationNum} &nbsp;·&nbsp; {consultationDate}
                </span>
                <button className="navbar__history-btn">History</button>
            </div>
        </header>
    );
    };

export default Navbar;