import React from 'react'
import Footer from '../components/FollowUpPage1/Footer';
import Navbar from '../components/FollowUpPage1/Navbar';
import ProgressBar from '../components/FollowUpPage1/ProgressBar';
import TextArea from '../components/FollowUpPage1/TextArea';


const Page1 = () => {
  return (
    <>
        <Navbar/>
        <ProgressBar pageClassName='page-1-progBar'/>
        <TextArea/>
        <Footer pageNum='page-1-foo'/>
    </>
  )
}

export default Page1