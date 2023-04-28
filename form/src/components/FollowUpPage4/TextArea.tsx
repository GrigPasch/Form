import React from 'react'
import './TextArea4.css'
import { useNavigate } from 'react-router-dom';

const TextArea = () => {
  const navigate = useNavigate();
  
  return (
    <div className='container' id='holder' style={{fontSize:'14px', fontFamily: 'Work Sans, sans-serif'}}>
        <div className='container' id='followup'>
          <div className='container' id='info'>
            <span id='fup'>
              Follow up
            </span>
            <div className='container' id='nextMeet'>
              <label>Next meeting</label>
              <input type='datetime' style={{width:'80px', height:'32px', border:'1px solid rgba(123,123,123,1)', borderRadius:'4px'}}/>
            </div>
            <div className='container' id='talkAbout' style={{display:'inline-flex', flexDirection:'column', gap:'25px', fontSize:'14px'}}>
              <label>What should we talk about?</label>
              <input type='textbox' style={{width:'347px', height:'68px', border:'1px solid rgba(123,123,123,1)', borderRadius:'4px'}}/>
            </div>
            <div style={{display: 'inline-flex', flexDirection: 'row', gap:'45px', alignItems:'center'}}>
              <div>
                <input type='checkbox' style={{width:'24px', height:'24px', boxSizing:'border-box'}}/>  
              </div>
              <div>
                <label>New weighing</label>
              </div>
            </div>
            <div style={{display: 'inline-flex', flexDirection: 'row', gap:'45px', alignItems:'center'}}>
              <div>
                <input type='checkbox' style={{width:'24px', height:'24px', boxSizing:'border-box'}}/>  
              </div>
              <div>
                <label>New waist measurement</label>
              </div>
            </div>
          </div>
        </div>
        <div className='container' id='buttons'>
          <button type='button' onClick={() => navigate('/Page-6', {replace: true})}>Print Report</button>
          <button type='button' onClick={() => navigate('/Page-5', {replace: true})}>Send via Email</button>
        </div>
    </div>
  )
}

export default TextArea