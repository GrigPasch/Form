import React from 'react';
import FormLayout from '../components/shared/FormLayout';
import Step3PersonalInfo from '../components/steps/Step3PersonalInfo';

const Page3: React.FC = () => (
    <FormLayout currentPage={3}>
        <Step3PersonalInfo />
    </FormLayout>
);

export default Page3;