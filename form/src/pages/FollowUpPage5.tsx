import React from 'react'
import Navbar from '../components/FollowUpPage1/Navbar'
import ProgressBar from '../components/FollowUpPage1/ProgressBar'
import TextArea from '../components/FollowUpPage5/TextArea'
import Footer from '../components/FollowUpPage1/Footer'

const FollowUpPage5 = () => {
  return (
    <>
      <Navbar/>
      <ProgressBar pageClassName='page-5-progBar'/>
      <TextArea/>
      <Footer pageNum='page-5-foo'/>
    </>
  )
}

export default FollowUpPage5