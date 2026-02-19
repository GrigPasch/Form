import React from 'react';
import { useForm } from '../../context/FormContext';
import { useNavigate } from 'react-router-dom';
import './Steps.css';

const Step4FollowUp: React.FC = () => {
    const { formData, updateField } = useForm();
    const navigate = useNavigate();

    return (
        <div className="step">
            <div className="step__header">
                <p className="step__eyebrow">Step 4</p>
                <h1 className="step__title">Follow-up</h1>
                <p className="step__subtitle">Schedule the next appointment and set the agenda.</p>
            </div>
            <div className="card">
                <div className="card__body">
                    <div className="field">
                        <label className="field__label" htmlFor="nextMeeting">Next meeting</label>
                        <input
                            id="nextMeeting"
                            className="field__input field__input--small"
                            type="datetime-local"
                            value={formData.nextMeeting}
                            onChange={e => updateField('nextMeeting', e.target.value)}
                        />
                    </div>
                    <div className="field" style={{ marginTop: '24px' }}>
                        <label className="field__label" htmlFor="talkAbout">What should we talk about?</label>
                        <textarea
                            id="talkAbout"
                            className="field__textarea"
                            placeholder="Topics for the next consultation…"
                            rows={4}
                            value={formData.talkAbout}
                            onChange={e => updateField('talkAbout', e.target.value)}
                        />
                    </div>
                    <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <label className="field__label">Reminders for next time</label>
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                className="checkbox"
                                checked={formData.newWeighing}
                                onChange={e => updateField('newWeighing', e.target.checked)}
                            />
                            <span>New weighing</span>
                        </label>
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                className="checkbox"
                                checked={formData.newWaistMeasurement}
                                onChange={e => updateField('newWaistMeasurement', e.target.checked)}
                            />
                            <span>New waist measurement</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="action-buttons">
                <button
                    type="button"
                    className="btn btn--outline"
                    onClick={() => navigate('/page-5')}
                >
                    Send Report via Email
                </button>
                <button
                    type="button"
                    className="btn btn--primary"
                    onClick={() => navigate('/page-6')}
                >
                    Print Report
                </button>
            </div>
        </div>
    );
};

export default Step4FollowUp;