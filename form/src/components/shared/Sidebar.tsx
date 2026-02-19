import React from 'react';
import './Sidebar.css';

const STEPS = [
    { label: 'Welcome', page: 1 },
    { label: 'Biometrics', page: 2 },
    { label: 'Personal Info', page: 3 },
    { label: 'Follow-up', page: 4 },
    { label: 'Send Report', page: 5 },
    { label: 'Done', page: 6 },
];

interface SidebarProps {
    currentPage: number;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage }) => {
    return (
        <aside className="sidebar">
            <nav className="sidebar__steps">
                {STEPS.map((step, i) => {
                    const isCompleted = currentPage > step.page;
                    const isActive = currentPage === step.page;
                    return (
                        <div
                            key={step.page}
                            className={`sidebar__step ${isActive ? 'sidebar__step--active' : ''} ${isCompleted ? 'sidebar__step--done' : ''}`}
                        >           
                            <div className="sidebar__step-indicator">
                                <div className="sidebar__step-dot">
                                    {isCompleted && <span className="sidebar__step-check">✓</span>}
                                    {isActive && <span className="sidebar__step-active-dot" />}
                                </div>
                                {i < STEPS.length - 1 && (
                                    <div className={`sidebar__step-line ${isCompleted ? 'sidebar__step-line--done' : ''}`} />
                                )}
                            </div>
                            <span className="sidebar__step-label">{step.label}</span>
                        </div>
                    );
                })}
            </nav>
        </aside>
    );
};

export default Sidebar;