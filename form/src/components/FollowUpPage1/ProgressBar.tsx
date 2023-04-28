/* eslint-disable no-template-curly-in-string */
import React from 'react'
import './ProgressBar.css'

interface ProgressBarProps{
  pageClassName: string;
}

function ProgressBar({pageClassName}: ProgressBarProps) {

    return (
      <div className='container' id='prog'>
        <div className='progress' id='sidebar'>
          <div className={`ProgressBar ${pageClassName}`} id='progLine'/>         
            <div className='rectangle' id='start'>
              <p>
                Start
              </p>
            </div>
            <div className='rectangle' id='bio'>
              <p>
                Biometrics
              </p>
            </div>
            <div className='rectangle' id='perInfo'>
              <p>
                Personal Info
              </p>
            </div>
            <div className='rectangle' id='fin'>
              <p>
                Finish
              </p>
            </div>
        </div>
    </div>
  );
  }

export default ProgressBar