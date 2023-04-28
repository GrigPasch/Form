import React from 'react'
import Footer from '../components/FollowUpPage1/Footer';
import Navbar from '../components/FollowUpPage1/Navbar';
import ProgressBar from '../components/FollowUpPage1/ProgressBar';
import TextArea from '../components/FollowUpPage3/PersonalInfo';


const Page3 = () => {
  return (
    <div>
        <Navbar/>
        <ProgressBar pageClassName='page-3-progBar'/>
        <TextArea/>
        <Footer pageNum='page-3-foo'/>
    </div>
    
  )
}

export default Page3