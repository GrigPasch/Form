import React from 'react'
import Footer from '../components/FollowUpPage1/Footer';
import Navbar from '../components/FollowUpPage1/Navbar';
import ProgressBar from '../components/FollowUpPage1/ProgressBar';
import Biometrics from '../components/FollowUpPage2/Biometrics';

const Page2 = () => {
  return (
    <>
        <Navbar/>
        <ProgressBar pageClassName='page-2-progBar'/>
        <Biometrics/>
        <Footer pageNum='page-2-foo'/>
    </>
    
  )
}

export default Page2