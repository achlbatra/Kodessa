import React from 'react';
import './styles/Homepage.css';
import Logo from '../assets/Logo.png'
import Hero from '../assets/Hero.png';
import ImageCard from '../components/ImageCard';
import Footer from '../components/Footer';
import Container from '../components/Container';

const Homepage = () => {
  return (
    <>
        <div className="top">
        <img src={Hero} alt="" className='image'/>
       <img src={Logo} alt="" srcset="" className='logo'/>
        </div>
        <div className="main">
            <h1 className='title'>WE ARE <br/> KODESSA KIIT</h1>
            <div className="box">
              <p>It is a vibrant and forward-thinking community dedicated to empowering women in technology. We don't just host events — we are a movement built on learning, collaboration, and mutual growth. Our mission transcends traditional boundaries by harnessing the power of teaching and learning, symbiotically driving progress through shared knowledge and innovation.

<br/><br/>At the heart of our society is a belief that success in tech comes from both individual brilliance and collective effort.</p>
            </div>
            <div className="upcoming">
              <h1 className='upcominghead'>UPCOMING EVENTS</h1>
              <ImageCard/>
              <a >GO TO EVENTS PAGE 🚀</a>
            </div>
           
        </div>
        <Container />
        <Footer />
    </>
  )
}

export default Homepage
