import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Steps.css';

const Step6Done: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="step step--centered">
            <div className="done-icon">✦</div>
            <h1 className="step__title">Consultation complete.</h1>
            <p className="step__subtitle" style={{ maxWidth: '400px', textAlign: 'center' }}>
                The report has been saved. The patient will receive a copy via email.
                See you at the next consultation.
            </p>
            <button
                type="button"
                className="btn btn--primary"
                style={{ marginTop: '32px' }}
                onClick={() => navigate('/')}
            >
                Return to login
            </button>
        </div>
    );
};

export default Step6Done;