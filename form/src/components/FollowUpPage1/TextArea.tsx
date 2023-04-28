import React from 'react'
import './TextArea.css'

const TextArea = () => {
  return (
    <div className='container' id='parent'>
        <div className='container' id='wb'>
            <p id='welb'>
                Welcome back.
            </p>
            <p>
                This is consultation number 8. The last consultation took place on 2 July 2022.
            </p>
        </div>
        <div className='container' id='new'>
            <span className='sp' id='mane'>
                Make new:
            </span>
            <span className='sp' id='waist'>
                Waist Measurement.
            </span>
            <span className='sp' id='weight'>
            Weight Measurement.
            </span>
        </div>
        <div className='container' id='goals'>
            <div className='container' id='short'>
                <span style={{fontWeight: '700'}}>
                    Short term goals
                </span>
                <p>
                    Before Summer
                    <ul>
                        <li>Goal 1</li>
                        <li>Goal 2</li>
                    </ul>
                    general consideration
                </p>
            </div>
            <div className='container' id='long'>
            <span style={{fontWeight: '700'}}>
                    Long term goals
                </span>
                <p>
                    Before Wedding
                    <ul>
                        <li>Goal 1</li>
                        <li>Goal 2</li>
                    </ul>
                    general consideration
                </p>
            </div>
        </div>
    </div>
    
  )
}

export default TextArea