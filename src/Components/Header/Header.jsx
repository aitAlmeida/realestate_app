import React from 'react';
import logo from '../../Images/image1.png';
import home1 from '../../Images/home1.png';

const Header = () => {
    return (
      <>
         <header id='Header'>
           <nav className='navbarHome HOMENAV'>
                <div className='NAVBARTYPE'>
                    <div className='navbar-logo-type-content'>
                        <a className='navbar-logo-type'>
                            <img src={logo} alt='' style={{ width: '100px' }} />
                        </a>
                    </div>
                    <div className='toggle-navbar-type false'>
                        <div className='nav-bar-link-type-content'>
                            <ul className='nav-bar-link-type'>
                                <li className='nav-item'>
                                    <a className='nav-link' href="">Home</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href="">All estate</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href="">About us</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href="">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className='my-bg-yellow get-started-btn'>
                            <li>
                                <a className='' href=''>started</a>
                            </li>
                        </div>
                    </div>
                    <div className='burger-Navbar'>

                    </div>
                </div>
           </nav>
       </header>
       <div className='home-header-content paddingHomeCenter'>
            <div>
                <div className='home-header-content-first-part'>
                    <div>
                        <div className='home-header-text'>
                            <p className='home-text-head'>Same day</p>
                            <p className='home-text-head'>Delivery for</p>
                            <div className='home-tex-head slide-text'>
                                <p className='slide-text-1'>online brands</p>
                                <p className='slide-text-2'>Local brands</p>
                            </div>
                        </div>
                        <p className='lastmile-text'>
                            last-mile delivery made easy, Affordabke & scalable
                        </p>
                    </div>
                    <img className='home-header-content-gif-part-gif' src={home1} alt=''/>
                </div>
                <div className='home-header-content-select-and-others'>
                    <img className='vectorApp vector1' src=''/>
                    <img className='vectorApp vector2' src=''/>
                    <img className='businessOrder' src=''/>
                </div>
            </div>
       </div>
      </>
    );
};

export default Header;