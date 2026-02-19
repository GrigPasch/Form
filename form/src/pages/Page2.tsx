import React from 'react';
import FormLayout from '../components/shared/FormLayout';
import Step2Biometrics from '../components/steps/Step2Biometrics';

const Page2: React.FC = () => (
    <FormLayout currentPage={2}>
        <Step2Biometrics />
    </FormLayout>
);

export default Page2;