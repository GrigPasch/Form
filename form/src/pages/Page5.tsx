import React from 'react';
import FormLayout from '../components/shared/FormLayout';
import Step5SendReport from '../components/steps/Step5SendReport';

const Page5: React.FC = () => (
    <FormLayout currentPage={5}>
        <Step5SendReport />
    </FormLayout>
);

export default Page5;