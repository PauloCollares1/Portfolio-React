import React from 'react'; 
import './Header.css';
//----------------------------//
import { SiTwitter, SiLinkedin, SiGithub } from 'react-icons/si';
import StickyBox from 'react-sticky-box';
import ParticlesBg from 'particles-bg';
import logo from '../menu/meme.png';








export const Header = () => {

  return (
      <StickyBox offsetTop={0}>
          <ParticlesBg type="lines" bg={true} />
        <div className='Header'>
            <div className='Header_logo'><img src={logo} alt="Logo portifolio"/></div>
            <nav>
                <ul className='Header_list'>
                    <a href='https://github.com/PauloCollares1'>
                        <li>
                            <SiGithub />
                        </li>
                    </a>
                    <a href='https://www.linkedin.com/in/paulo-collares/'>
                        <li>
                            < SiLinkedin />
                        </li>
                    </a>
                    <a href='https://twitter.com/CollaresPF'>
                        <li>
                            <SiTwitter />
                        </li>
                    </a>
                </ul>
            </nav>
        </div>
      </StickyBox>
  )
}
