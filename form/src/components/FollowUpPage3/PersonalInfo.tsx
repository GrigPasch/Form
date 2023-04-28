import React from 'react'
import './PersonalInfo.css'

const TextArea = () => {
  return (
    <div className='container' id='formHolder'>
        <div className='container' id='firstHalf'>
            <div className='container' id='firstHalfLeftSide'>
              <div>
                <span style={{fontWeight:'600'}}>Samtale</span>
              </div>
              <div>
                <p>
                  Do you feel that your weight affects<br></br>
                  your health and quality of life?
                </p>
                <div className='whatIsThis' id='first'>
                  <div>
                    <input type='checkbox'/>  
                  </div>
                  <div>
                    <label>Yes</label>
                  </div>
                  <div>
                    <input type='checkbox'/>
                  </div>
                  <div>
                    <label>No</label>
                  </div>
                </div>
              </div>
              
              
              <div className='whatIsThis' id='second'>
                <span>If yes, why?</span>
                <input type='text'/>
            </div>
            <div>
                <p>
                  Are there times of the day<br/>
                  when you are more likely to<br/>
                  consume extra calories?
                </p>
                <div className='whatIsThis' id='third'>
                  <div>
                    <input type='checkbox'/>  
                  </div>
                  <div>
                    <label>Yes</label>
                  </div>
                  <div>
                    <input type='checkbox'/>
                  </div>
                  <div>
                    <label>No</label>
                  </div>
                </div>
            </div>
            <div>
                <p>
                  Do you mostly eat the way<br/>
                  you want?
                </p>
                <div className='whatIsThis' id='fourth'>
                  <div>
                    <input type='checkbox'/>  
                  </div>
                  <div>
                    <label>Yes</label>
                  </div>
                  <div>
                    <input type='checkbox'/>
                  </div>
                  <div>
                    <label>No</label>
                  </div>
                </div>
            </div>
            <div>
                <p>
                  Are you as active as you want<br/>
                  to be?
                </p>
                <div className='whatIsThis' id='fifth'>
                  <div>
                    <input type='checkbox'/>  
                  </div>
                  <div>
                    <label>Yes</label>
                  </div>
                  <div>
                    <input type='checkbox'/>
                  </div>
                  <div>
                    <label>No</label>
                  </div>
                </div>
            </div>
        </div>
        <div className='container' id='firstHalfOldValues'>
          <div className='whatIsThis' id='sixth'>
            <span style={{fontSize: '10px'}}> 2. Juni 2022</span>
            <span style={{fontSize: '12px'}}>3 x Yes     1 x No</span>
          </div>
          <div>
          <span>
              Yes
            </span>
          </div>
          <div>
            <p>
              In a very negative way. I<br/>
              have difficulty lifting things
            </p>
          </div>
          <div></div>
          <div>
            <span>
              No
            </span>
          </div>
          <div></div>
          <div>
          <span>
              Yes
            </span>
          </div>
          <div></div>
          <div>
          <span>
              Yes
            </span>
          </div>
        </div>
      </div>
        <div className='container' id='secondHalf'>
          <div className='container' id='secondHalfLeftSide'>
                <div className='whatIsThis' id='seventh'>
                  <span>What do you want to<br/>achieve?</span>
                </div>
                <div className='whatIsThis' id='eight'>
                <p>
                  Short term goals
                </p>
                <input type='text'/>
              </div>
              <div className='whatIsThis' id='nineth'>
                <span>When?</span>
                <input type='text'/>
              </div>

              <div className='whatIsThis' id='tenth'>
                <p>
                  Long term goals
                </p>
                <input type='text'/>
              </div>
              <div className='whatIsThis' id='eleventh'>
                <span>When?</span>
                <input type='text' />
              </div>            
        </div>
        <div className='container' id='secondHalfOldValues'>
          <div>
            <span style={{fontSize: '10px'}}> 2. Juni 2022</span>
          </div>
          <div></div>
          <div>
            <span>
              Lorem Ipsum is simply dummy<br/>
              text of the printing and<br/>
              typesetting industry. Lorem<br/>
              Ipsum has been the industry's.
            </span>
          </div>
          <div>
            <span>Before the summer</span>
          </div>
          <div></div>
          <div >
            <span>
              Lorem Ipsum is simply dummy<br/>
              text of the printing and<br/>
              typesetting industry. Lorem<br/>
              Ipsum has been the industry's.
            </span>
          </div>
          <div>
          <span>
              Before the wedding
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextArea