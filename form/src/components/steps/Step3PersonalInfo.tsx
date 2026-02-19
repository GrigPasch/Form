import React from 'react';
import { useForm } from '../../context/FormContext';
import './Steps.css';

interface YesNoProps {
    label: string;
    value: boolean | null;
    onChange: (val: boolean) => void;
    previousAnswer?: string;
}

const YesNoQuestion: React.FC<YesNoProps> = ({ label, value, onChange, previousAnswer }) => (
    <div className="yn-question">
        <p className="yn-question__label">{label}</p>
        <div className="yn-question__options">
            <label className={`yn-option ${value === true ? 'yn-option--selected' : ''}`}>
                <input
                    type="radio"
                    name={label}
                    checked={value === true}
                    onChange={() => onChange(true)}
                />
                Yes
            </label>
            <label className={`yn-option ${value === false ? 'yn-option--selected' : ''}`}>
                <input
                    type="radio"
                    name={label}
                    checked={value === false}
                    onChange={() => onChange(false)}
                />
                No
            </label>
        </div>
        {previousAnswer && (
            <span className="field__prev">Previously: {previousAnswer}</span>
        )}
    </div>
);

const Step3PersonalInfo: React.FC = () => {
    const { formData, updateField } = useForm();

    return (
        <div className="step">
            <div className="step__header">
                <p className="step__eyebrow">Step 3</p>
                <h1 className="step__title">Personal Info</h1>
                <p className="step__subtitle">A few questions about your lifestyle and goals.</p>
            </div>
            <div className="step__cards">
                <div className="card">
                    <div className="card__header">
                        <h2 className="card__title">Lifestyle Questions</h2>
                        <p className="card__meta">Previous answers from 2 June 2022</p>
                    </div>
                    <div className="card__body">
                        <YesNoQuestion
                            label="Do you feel that your weight affects your health and quality of life?"
                            value={formData.weightAffectsHealth}
                            onChange={val => updateField('weightAffectsHealth', val)}
                            previousAnswer="Yes"
                        />
                        {formData.weightAffectsHealth === true && (
                            <div className="field" style={{ marginTop: '12px' }}>
                                <label className="field__label">If yes, why?</label>
                                <textarea
                                    className="field__textarea"
                                    placeholder="Describe how your weight affects your health…"
                                    value={formData.weightAffectsHealthReason}
                                    onChange={e => updateField('weightAffectsHealthReason', e.target.value)}
                                    rows={3}
                                />
                                <span className="field__prev">Previously: "In a very negative way. I have difficulty lifting things."</span>
                            </div>
                        )}
                        <YesNoQuestion
                            label="Are there times of the day when you are more likely to consume extra calories?"
                            value={formData.extraCaloriesTimes}
                            onChange={val => updateField('extraCaloriesTimes', val)}
                            previousAnswer="No"
                        />
                        <YesNoQuestion
                            label="Do you mostly eat the way you want?"
                                value={formData.eatsAsWanted}
                                onChange={val => updateField('eatsAsWanted', val)}
                                previousAnswer="Yes"
                        />
                        <YesNoQuestion
                            label="Are you as active as you want to be?"
                            value={formData.asActiveAsWanted}
                            onChange={val => updateField('asActiveAsWanted', val)}
                            previousAnswer="Yes"
                        />
                    </div>
                </div>
                <div className="card">
                    <div className="card__header">
                        <h2 className="card__title">Goals</h2>
                    </div>
                    <div className="card__body goals-form-grid">
                        <div className="field">
                            <label className="field__label">Short term goal</label>
                            <textarea
                                className="field__textarea"
                                placeholder="Describe your short term goal…"
                                value={formData.shortTermGoal}
                                onChange={e => updateField('shortTermGoal', e.target.value)}
                                rows={3}
                            />
                            <span className="field__prev">Previously: "Lorem Ipsum…"</span>
                        </div>
                        <div className="field">
                            <label className="field__label">When?</label>
                            <input
                                className="field__input field__input--small"
                                type="text"
                                placeholder="e.g. Before summer"
                                value={formData.shortTermGoalWhen}
                                onChange={e => updateField('shortTermGoalWhen', e.target.value)}
                            />
                            <span className="field__prev">Previously: "Before the summer"</span>
                        </div>
                        <div className="field">
                            <label className="field__label">Long term goal</label>
                            <textarea
                                className="field__textarea"
                                placeholder="Describe your long term goal…"
                                value={formData.longTermGoal}
                                onChange={e => updateField('longTermGoal', e.target.value)}
                                rows={3}
                            />
                            <span className="field__prev">Previously: "Lorem Ipsum…"</span>
                        </div>
                        <div className="field">
                            <label className="field__label">When?</label>
                            <input
                                className="field__input field__input--small"
                                type="text"
                                placeholder="e.g. Before the wedding"
                                value={formData.longTermGoalWhen}
                                onChange={e => updateField('longTermGoalWhen', e.target.value)}
                            />
                            <span className="field__prev">Previously: "Before the wedding"</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step3PersonalInfo;