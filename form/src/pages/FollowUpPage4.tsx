import React from 'react'
import Navbar from '../components/FollowUpPage1/Navbar'
import ProgressBar from '../components/FollowUpPage1/ProgressBar'
import TextArea from '../components/FollowUpPage4/TextArea'
import Footer from '../components/FollowUpPage1/Footer'


const FollowUpPage4 = () => {
  return (
    <>
      <Navbar/>
      <ProgressBar pageClassName='page-4-progBar'/>
      <TextArea/>
      <Footer pageNum='page-4-foo'/>
    </>
  )
}

export default FollowUpPage4