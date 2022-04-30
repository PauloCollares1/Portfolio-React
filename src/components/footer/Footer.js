import React from 'react'; 
import './Footer.css';
//----------------------------//
import StickyBox from 'react-sticky-box';
import ParticlesBg from 'particles-bg';




export const Footer = () => {

  return (
      <StickyBox offsetBottom={0}>
          <ParticlesBg type="lines" bg={true} />
            <div className='footer'>
                <h3 className='footer_text'>Powered by Paulo Dev 1</h3>
            </div>
      </StickyBox>
  )
}