import React from 'react'
import './Biometrics.css'
import CountrySelect from './CountrySelect'


const Biometrics = () => {
  return (
    <div className='container' id='bioParent'>
      <div className='container' id='header'>
        <span>Biometric</span>
        <span id="old" style={{color: 'rgba(123,123,123,1', font:'Work Sans, sans-serif', fontWeight: '400', fontSize:'10px'}}>2.Juni 2022</span>
        
        <div className='countr'>
        Country<CountrySelect/>
        </div>
      </div>
      <div className='container' id='inputs'>
        <div className='container' id='tall'>
          <label>
            Height
          </label>
          <input type='number'/>
          <span>cm</span>
        </div>
        <div className='container' id='weigh'>
          <label>
            Weight
          </label>
          <input type='number'/>
          <span>kg</span>
        </div>
        <div className='container' id='wide'>
          <label>
            Waist
          </label>
          <input type='number'/>
          <span>cm</span>
        </div>
      </div>
      <div className='container' id='oldValues'>
        <span style={{color: 'rgba(123,123,123,1', font:'Work Sans, sans-serif', fontWeight: '400'}}>182 cm</span>
        <span style={{color: 'rgba(123,123,123,1', font:'Work Sans, sans-serif', fontWeight: '400'}}>124 Kg</span>
        <span style={{color: 'rgba(123,123,123,1', font:'Work Sans, sans-serif', fontWeight: '400'}}>134 cm</span>
      </div>
    </div>
  )
}

export default Biometrics