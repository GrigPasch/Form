import React, { useState } from 'react';
import { useForm } from '../../context/FormContext';
import './Steps.css';

const COUNTRIES = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia',
    'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Belarus',
    'Belgium', 'Belize', 'Benin', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana',
    'Brazil', 'Bulgaria', 'Cambodia', 'Cameroon', 'Canada', 'Chile', 'China', 'Colombia',
    'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Dominican Republic',
    'Ecuador', 'Egypt', 'El Salvador', 'Estonia', 'Ethiopia', 'Finland', 'France', 'Georgia',
    'Germany', 'Ghana', 'Greece', 'Guatemala', 'Honduras', 'Hungary', 'Iceland', 'India',
    'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan',
    'Kazakhstan', 'Kenya', 'South Korea', 'Kuwait', 'Latvia', 'Lebanon', 'Libya', 'Lithuania',
    'Luxembourg', 'Malaysia', 'Malta', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Morocco',
    'Myanmar', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Nigeria', 'Norway',
    'Oman', 'Pakistan', 'Panama', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
    'Qatar', 'Romania', 'Russia', 'Saudi Arabia', 'Senegal', 'Serbia', 'Singapore',
    'Slovakia', 'Slovenia', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan',
    'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tanzania', 'Thailand', 'Tunisia', 'Turkey',
    'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States',
    'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe',
];

const PREVIOUS = { weight: '124 kg', waist: '134 cm' };

const Step2Biometrics: React.FC = () => {
    const { formData, updateField } = useForm();
    const [countrySearch, setCountrySearch] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const filtered = COUNTRIES.filter(c =>
        c.toLowerCase().includes(countrySearch.toLowerCase())
    );

    const selectCountry = (country: string) => {
        updateField('country', country);
        setCountrySearch(country);
        setShowDropdown(false);
    };

    return (
        <div className="step">
            <div className="step__header">
                <p className="step__eyebrow">Step 2</p>
                <h1 className="step__title">Biometrics</h1>
                <p className="step__subtitle">Enter today's measurements. Previous values from 2 June 2022 are shown for reference.</p>
            </div>
            <div className="card">
                <div className="card__body">
                    <div className="biometrics-grid">
                        {/* Country */}
                        <div className="field field--full">
                            <label className="field__label">Country / Region</label>
                            <div className="country-select">
                                <input
                                    className="field__input"
                                    type="text"
                                    placeholder="Search country…"
                                    value={countrySearch}
                                    onChange={e => { setCountrySearch(e.target.value); setShowDropdown(true); }}
                                    onFocus={() => setShowDropdown(true)}
                                    onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                                />
                                {showDropdown && filtered.length > 0 && (
                                    <ul className="country-select__dropdown">
                                        {filtered.slice(0, 8).map(c => (
                                            <li key={c} onMouseDown={() => selectCountry(c)} className="country-select__option">
                                                {c}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                        {/* Height */}
                        <div className="field">
                            <label className="field__label">Height</label>
                            <div className="field__input-group">
                                <input
                                    className="field__input"
                                    type="number"
                                    placeholder="—"
                                    value={formData.height}
                                    onChange={e => updateField('height', e.target.value)}
                                    min={0} max={300}
                                />
                                <span className="field__unit">cm</span>
                            </div>
                        </div>
                        {/* Weight */}
                        <div className="field">
                            <label className="field__label">Weight</label>
                            <div className="field__input-group">
                                <input
                                    className="field__input"
                                    type="number"
                                    placeholder="—"
                                    value={formData.weight}
                                    onChange={e => updateField('weight', e.target.value)}
                                    min={0} max={500}
                                />
                                <span className="field__unit">kg</span>
                            </div>
                            <span className="field__prev">Previously: {PREVIOUS.weight}</span>
                        </div>
                        {/* Waist */}
                        <div className="field">
                            <label className="field__label">Waist</label>
                            <div className="field__input-group">
                                <input
                                    className="field__input"
                                    type="number"
                                    placeholder="—"
                                    value={formData.waist}
                                    onChange={e => updateField('waist', e.target.value)}
                                    min={0} max={300}
                                />
                                <span className="field__unit">cm</span>
                            </div>
                            <span className="field__prev">Previously: {PREVIOUS.waist}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step2Biometrics;