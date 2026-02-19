import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useForm } from '../../context/FormContext';
import './Steps.css';

const Step1Welcome: React.FC = () => {
    return (
        <div className="step">
            <div className="step__header">
                <p className="step__eyebrow">Consultation No. 8</p>
                <h1 className="step__title">Welcome back.</h1>
                <p className="step__subtitle">
                    This is consultation number 8. The last consultation took place on{' '}
                    <strong>2 July 2022</strong>.
                </p>
            </div>
            <div className="step__cards">
                <div className="card">
                    <div className="card__header">
                        <h2 className="card__title">New Measurements</h2>
                        <p className="card__meta">To record today</p>
                    </div>
                    <div className="card__body">
                        <div className="measurement-item">
                            <span className="measurement-item__label">Waist Measurement</span>
                            <span className="measurement-item__badge">Pending</span>
                        </div>
                        <div className="measurement-item">
                            <span className="measurement-item__label">Weight Measurement</span>
                            <span className="measurement-item__badge">Pending</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__header">
                        <h2 className="card__title">Goals Overview</h2>
                        <p className="card__meta">Set in previous consultation</p>
                    </div>
                    <div className="card__body goals-grid">
                        <div className="goals-column">
                            <p className="goals-column__heading">Short term</p>
                            <p className="goals-column__when">Before Summer</p>
                            <ul className="goals-list">
                                <li>Goal 1</li>
                                <li>Goal 2</li>
                            </ul>
                            <p className="goals-column__note">General consideration</p>
                        </div>
                        <div className="goals-divider" />
                        <div className="goals-column">
                            <p className="goals-column__heading">Long term</p>
                            <p className="goals-column__when">Before Wedding</p>
                            <ul className="goals-list">
                                <li>Goal 1</li>
                                <li>Goal 2</li>
                            </ul>
                            <p className="goals-column__note">General consideration</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step1Welcome;