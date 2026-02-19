import React from 'react';
import FormLayout from '../components/shared/FormLayout';
import Step4FollowUp from '../components/steps/Step4FollowUp';

const Page4: React.FC = () => (
    <FormLayout currentPage={4}>
        <Step4FollowUp />
    </FormLayout>
);

export default Page4;