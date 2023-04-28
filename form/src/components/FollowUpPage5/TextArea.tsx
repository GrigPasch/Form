import React from 'react'
import './TextArea5.css'
import { useNavigate } from 'react-router-dom';

const TextArea = () => {
  const navigate = useNavigate();
  
  return (
    <div className='container' id="textAreaHolder">
      <div className='container' id='repoAreaHolder'>
        <div className='container' id='report'>
          <p>Send report via email</p>
        </div>
        <div className='container' id='emailAdd'>
          <label>Email Adress</label>
          <input type='email'/>
          <button type='button'onClick={() => navigate('/Page-6', {replace: true})}>Send</button>
        </div>
      </div>
      <p>Email preview</p>
      <div className='container' id='emailPre'>
        <p>Subject: Summary of consultation No 8, 4 February 2022</p>
        <div className='container' id='bioPre'>
          <div>
            <p>Biometrics</p>
            <p>Country:<span id='special'>Algeria</span></p>
            <p>Height</p>
            <span>182cm</span>
          </div>
          <div id="secondColumn">
            <span>95Kg</span>
            <p>Weight</p>  
          </div>
          <div id="thirdColumn">
            <span>120cm</span>
            <p>Waist</p>
          </div>
        </div>
        <div className='rectangle' id='hLine'/>
        <div className='container' id='GoalsPre'>
        <div className='container' id='firstRow'>
          <div>
          <p id='bold'>Short Term Goals</p>
          <ul>
            <li>Goal 1</li>
            <li>Goal 2</li>
          </ul>
          </div>
          <div>
          <p id='bold'>Long Term Goals</p>
          <ul>
            <li>Goal 1</li>
            <li>Goal 2</li>
          </ul>
          </div>  
        </div>
          <div className='container' id='secondRow'>
            <div>
              <p id='bold'>When</p>
              <p>Before Summer</p>
            </div>
            <div>
              <p id='bold'>When</p>
              <p>Before Wedding</p>
            </div>
          </div>
        </div>
        <div className='rectangle' id='hLine'/>
        <div className='container' id='PerInfoPre'>
          <div className='container' id='PerInfoPreRow1'>
            <p id='bold'>Personal Info</p>
            <div style={{display:'inline-flex'}}>
              <p>3 x Yes</p>
              <p>1 x No</p>
            </div>
          </div>
          <div className='container' id='PerInfoPreRow2'>
            <p>Do you feel that your weight affects your health and quality of<br/>life?</p>
            <p>Yes</p>
          </div>
          <div className='container' id='PerInfoPreRow3'>
            <p>Are there times of the day when you are more likely to consume<br/>extra calories?</p>
            <p>Yes</p>
          </div>
          <div className='container' id='PerInfoPreRow4'>
          <p>Do you mostly eat the way you want?</p>
            <p>Yes</p>
          </div>
          <div className='container' id='PerInfoPreRow5'>
          <p>Are you as active as you want to be<br/>life?</p>
            <p>No</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextArea