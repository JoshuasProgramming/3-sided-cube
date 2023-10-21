//react imports
import React, { Component } from 'react';

// import images / logos
import Twitter from '../images/Twitter.png';
import Instagram from '../images/Instagram.png';
import Facebook from '../images/Facebook.png';
import LinkedIn from '../images/LinkedIn.png';
import YouTube from '../images/YouTube.png';

import Company_Logo from '../images/logo.png';
import Text_Logo from '../images/text_logo.png';

class Footer extends Component {
    
    render(){
        return (
            <footer className='bg-black border-gray-200 dark:bg-grey-900 flex items-center justify-between flex-column h-60 mt-auto flex-col'>
   
                {/* Row 1 */}
                <div className='flex items-center justify-start flex-row h-24 w-full ml-10'>
                    <img className='mx-3' src={Company_Logo} alt="3-sided-cube-logo"/>
                    <img src={Text_Logo} alt="3-sided-cube-text-logo"/>
                </div>

                {/* <hr className='border-t-4 border-white ml-10 h-5 w-4/5 self-start ml-7' /> */}
                

                {/* Row 2 */}

                <div className='flex items-center justify-between flex-row w-full '>
                    {/* Locations */}
                    <div className='flex items-center justify-start flex-row text-white w-2/4'>
                        {/* location 1 */}
                        <div className='mr-10 mx-7'>
                            <h1>Bournemouth</h1>
                            <p>Telephone House</p>
                            <p>Bournemouth, BH1 3NE</p>
                        </div>

                        {/* location 2 */}
                        <div className='mr-10'>
                            <h1>London</h1>
                            <p>54 Eastcheap</p>
                            <p>London EC3M 1JP</p>
                        </div>

                        {/* location 3 */}
                        <div className='mr-10'>
                            <h1>Washington</h1>
                            <p>80 M Street SE</p>
                            <p>Washington d.c. 20003</p>
                        </div>

                        {/* location 5 */}
                        <div>
                            <h1>Florida</h1>
                            <p>7904 4th St N, STE 300</p>
                            <p>St. Peterburg FL 33702</p>
                        </div>
    
                    </div>
                        
                    {/* Socials */}
                    <div className='w-1/4 mr-10'>
                        {/* Top */}
                        <h3 className='text-white'>Get Social</h3>
                        {/* Bottom */}
                        <div className='flex items-center justify-between flex-row'>
                            <img className='w-12 h-12' src={Twitter} alt="3-sided-cube-logo"/>
                            <img className='h-6 w-6 invert w-12 h-12' src={Instagram} alt="3-sided-cube-text-logo"/>
                            <img className='w-12 h-12' src={Facebook} alt="3-sided-cube-text-logo"/>
                            <img className='w-12 h-12' src={LinkedIn} alt="3-sided-cube-text-logo"/>
                            <img className='w-12 h-12' src={YouTube} alt="3-sided-cube-text-logo"/>
                        </div>
                    </div>
                    
                </div>

                {/* Row 3 */}
                <div className='flex items-center justify-between flex-row'>
                    {/* left */}
                    <p>2023 3 Sided Cube</p>

                    {/* right */}
                    <p>Let's Build Tech For Good</p>
                </div>

            </footer>
        )
    }

}

export default Footer