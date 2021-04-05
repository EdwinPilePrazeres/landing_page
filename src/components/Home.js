import React from 'react'
import Navbar from './Navbar'
import './style.scss'
import {FaFacebookSquare, FaInstagramSquare, FaLinkedin} from 'react-icons/fa'

const Home = () => {
    return (
        <div className='big_body'>
            <Navbar />
            <div className='container'>
                <div className='img-box'>
                    <img src={require('./images/F14_Tomcat.png').default} alt='F14 Tomcat' />
                </div>
                <p className='vertical_text'>F14 Tomcat © Rights Reserved</p>
                <p className='vertical_text'>Edwin Pile © Having Fun</p>
                <div className='social_media'>
                    <FaFacebookSquare className='icons'/>
                    <FaInstagramSquare className='icons' />
                    <FaLinkedin className='icons'/>
                </div>
                

            </div>
        </div>
    )
}

export default Home
