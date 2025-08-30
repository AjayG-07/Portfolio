import React from 'react';
import './Home.css';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <>
      <div id="home">
        Home
      <div className="allhome">
        <div className="rightside">
          <div className="details">
            <div className="line1">I'M</div>
            <div className="line2">AJAY GAIKWAD</div>
            <div className="line3">
            <Typewriter
          words={['PYTHON DEVLOPER', 'WEB DEVLOPER', 'FULL STACK DEVLOPER','BACKEND DEVLOPER']}
          loop={Infinity}
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
            </div>
            <div style={{ display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    marginTop:' 30px'}} >

            <div className="click">
            <button className="btn">Hire me</button>
            </div>

            </div>
          </div>
        </div>
        <div className="leftside">
          <div className="box">
              <div className="img1">
                <img src="./p-image1.PNG" alt="" />
              </div>
              <div className="square"></div>
          </div>
        </div>

        </div>
      
      </div>
    </>
  );
};

export default Home;
