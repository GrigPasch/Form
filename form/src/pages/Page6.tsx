import React from 'react';
import FormLayout from '../components/shared/FormLayout';
import Step6Done from '../components/steps/Step6Done';

const Page6: React.FC = () => (
    <FormLayout currentPage={6}>
        <Step6Done />
    </FormLayout>
);

export default Page6;