import React from 'react'
import './header.css'
import bg from '../../Photos/bg-h.jpg'

const Header = () => {
    return(
        <div className='header'>
           <img className='header__pic' src={bg}  alt='bg'/>
            <div class="animated-title">
                <div class="text-top">
                    <div>
                         <span>Hello !</span>
                         <span>I'm Sara Boshnaq</span>
                    </div>
                </div>
                <div class="text-bottom">
                    <div >Full Stack Developer</div>
                </div>
            </div>
        </div>
    )
}

export default Header