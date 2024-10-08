import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import {TypeAnimation} from 'react-type-animation';

const Homepage = () => {

  const [typingStatus, setTypingStatus] = new useState("human1");

  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="" className='orbital' />
      <div className="left">
        <h1>AI CHAT</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, nulla?</h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg">

            </div>
          </div>
          <img src="/bot.png" alt="" className='bot' />
          <div className="chat">
            <img src={typingStatus === "human1" ? "/human1.jpeg" : typingStatus === "human2" ? "/human2.jpeg" : "bot.png"} alt="" />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Human: Hey there! What do you like to do for fun?',
                2000, () => {
                  setTypingStatus("bot");
                },
                'Bot: I love learning new things! What about you?',
                2000, () => {
                  setTypingStatus("human1");
                },
                'Human: I’m really into painting and hiking',
                2000, () => {
                  setTypingStatus("bot");
                },
                'Bot: That sounds awesome! ',
                2000, () => {
                  setTypingStatus("human2");
                },
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span> | </span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
