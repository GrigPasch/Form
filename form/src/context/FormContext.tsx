import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface FormData {
    // Biometrics
    country: string;
    height: string;
    weight: string;
    waist: string;

    // Personal Info
    weightAffectsHealth: boolean | null;
    weightAffectsHealthReason: string;
    extraCaloriesTimes: boolean | null;
    eatsAsWanted: boolean | null;
    asActiveAsWanted: boolean | null;
    shortTermGoal: string;
    shortTermGoalWhen: string;
    longTermGoal: string;
    longTermGoalWhen: string;

    // Follow-up
    nextMeeting: string;
    talkAbout: string;
    newWeighing: boolean;
    newWaistMeasurement: boolean;

    // Email
    emailAddress: string;
}

const defaultFormData: FormData = {
    country: '',
    height: '',
    weight: '',
    waist: '',
    weightAffectsHealth: null,
    weightAffectsHealthReason: '',
    extraCaloriesTimes: null,
    eatsAsWanted: null,
    asActiveAsWanted: null,
    shortTermGoal: '',
    shortTermGoalWhen: '',
    longTermGoal: '',
    longTermGoalWhen: '',
    nextMeeting: '',
    talkAbout: '',
    newWeighing: false,
    newWaistMeasurement: false,
    emailAddress: '',
    };

interface FormContextType {
    formData: FormData;
    updateField: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
}

const FormContext = createContext<FormContextType | null>(null);

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [formData, setFormData] = useState<FormData>(defaultFormData);

    const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <FormContext.Provider value={{ formData, updateField }}>
            {children}
        </FormContext.Provider>
    );
};

export const useForm = (): FormContextType => {
    const ctx = useContext(FormContext);
    if (!ctx) throw new Error('useForm must be used within FormProvider');
    return ctx;
};