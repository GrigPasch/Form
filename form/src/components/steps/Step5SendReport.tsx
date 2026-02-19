import React, { useState } from 'react';
import { useForm } from '../../context/FormContext';
import { useNavigate } from 'react-router-dom';
import './Steps.css';

const Step5SendReport: React.FC = () => {
    const { formData, updateField } = useForm();
    const navigate = useNavigate();
    const [sent, setSent] = useState(false);

    const handleSend = () => {
        if (!formData.emailAddress) return;   
        setSent(true);
        setTimeout(() => navigate('/page-6'), 1200);
    };

    return (
        <div className="step">
            <div className="step__header">
                <p className="step__eyebrow">Step 5</p>
                <h1 className="step__title">Send Report</h1>
                <p className="step__subtitle">Review the consultation summary below and send it via email.</p>
            </div>
            <div className="card" style={{ marginBottom: '24px' }}>
                <div className="card__body">
                    <div className="email-send-row">
                        <div className="field" style={{ flex: 1 }}>
                            <label className="field__label" htmlFor="emailAddr">Email address</label>
                            <input
                                id="emailAddr"
                                className="field__input"
                                type="email"
                                placeholder="patient@example.com"
                                value={formData.emailAddress}
                                onChange={e => updateField('emailAddress', e.target.value)}
                            />
                        </div>
                        <button
                            type="button"
                            className={`btn ${sent ? 'btn--success' : 'btn--primary'}`}
                            onClick={handleSend}
                            disabled={sent}
                            style={{ alignSelf: 'flex-end' }}
                        >
                            {sent ? '✓ Sent' : 'Send Report'}
                        </button>
                    </div>
                </div>
            </div>
            {/* Email Preview */}
            <p className="preview-label">Email preview</p>
            <div className="email-preview">
                <p className="email-preview__subject">
                    Subject: Summary of consultation No. 8, 3 August 2022
                </p>
                <div className="email-section">
                    <h3 className="email-section__title">Biometrics</h3>
                    <div className="email-bio-row">
                        <div className="email-bio-item">
                            <span className="email-bio-item__label">Country</span>
                            <span className="email-bio-item__value">{formData.country || '—'}</span>
                        </div>
                        <div className="email-bio-item">
                            <span className="email-bio-item__label">Height</span>
                            <span className="email-bio-item__value">{formData.height ? `${formData.height} cm` : '—'}</span>
                        </div>
                        <div className="email-bio-item">
                            <span className="email-bio-item__label">Weight</span>
                            <span className="email-bio-item__value">{formData.weight ? `${formData.weight} kg` : '—'}</span>
                        </div>
                        <div className="email-bio-item">
                            <span className="email-bio-item__label">Waist</span>
                            <span className="email-bio-item__value">{formData.waist ? `${formData.waist} cm` : '—'}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="email-divider" />
            <div className="email-section">
                <h3 className="email-section__title">Goals</h3>
                <div className="email-goals-row">
                    <div>
                        <p className="email-goals-heading">Short term</p>
                        <p>{formData.shortTermGoal || '—'}</p>
                        {formData.shortTermGoalWhen && <p className="field__prev">When: {formData.shortTermGoalWhen}</p>}
                    </div>
                    <div>
                        <p className="email-goals-heading">Long term</p>
                        <p>{formData.longTermGoal || '—'}</p>
                        {formData.longTermGoalWhen && <p className="field__prev">When: {formData.longTermGoalWhen}</p>}
                    </div>
                </div>
            </div>
            <div className="email-divider" />
            <div className="email-section">
                <h3 className="email-section__title">Personal Info</h3>
                <div className="email-info-table">
                    {[
                        { q: 'Weight affects health and quality of life?', a: formData.weightAffectsHealth },
                        { q: 'Times of day with extra calorie consumption?', a: formData.extraCaloriesTimes },
                        { q: 'Mostly eats the way they want?', a: formData.eatsAsWanted },
                        { q: 'As active as wanted?', a: formData.asActiveAsWanted },
                    ].map(row => (
                        <div key={row.q} className="email-info-row">
                            <span className="email-info-row__question">{row.q}</span>
                            <span className={`email-info-row__answer ${row.a === null ? 'unanswered' : ''}`}>
                            {row.a === null ? '—' : row.a ? 'Yes' : 'No'}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Step5SendReport;