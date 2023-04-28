import React from 'react'
import Footer from '../components/FollowUpPage1/Footer'
import Navbar from '../components/FollowUpPage1/Navbar'
import ProgressBar from '../components/FollowUpPage1/ProgressBar'
import TextArea from '../components/FollowUpPage6/TextArea'

const FollowUpPage6 = () => {
  return (
    <>
      <Navbar/>
      <ProgressBar pageClassName='page-6-progBar'/>
      <TextArea/>
      <Footer pageNum='page-6-foo'/>
    </>
  )
}

export default FollowUpPage6