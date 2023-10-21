//react imports
import React, { Component } from 'react';

// import images / logos
import Company_Logo from '../images/logo.png';
import Text_Logo from '../images/text_logo.png';

class Navbar extends Component {
    
    render(){
        return (
            <nav className='bg-black border-gray-200 dark:bg-grey-900'>
                {/* Left side navigation */}
                <div className='flex items-center justify-start flex-row h-24'>
                    <img className='mx-10' src={Company_Logo} alt="3-sided-cube-logo"/>
                    <img src={Text_Logo} alt="3-sided-cube-text-logo"/>
                </div>

                {/* Right side navigation */}
                <div></div>
            </nav>
        )
    }

}

export default Navbar