import React from 'react';
import FormLayout from '../components/shared/FormLayout';
import Step1Welcome from '../components/steps/Step1Welcome';

const Page1: React.FC = () => (
    <FormLayout currentPage={1}>
        <Step1Welcome />
    </FormLayout>
);

export default Page1;