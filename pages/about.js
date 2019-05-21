import React, { Component } from 'react';
import Image from 'reusecore/src/elements/Image';
import blueImg from 'common/src/assets/image/about/2.png';
import purpleImg from 'common/src/assets/image/about/1.png';
import buttong from 'common/src/assets/image/about/3.png';
import buttonw from 'common/src/assets/image/about/4.png';
import Button from 'reusecore/src/elements/Button';
import './about.style.css';

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="btn">
          <Button icon={<Image src={buttonw} alt={'white'} />} />
          <Button icon={<Image src={buttong} alt={'green'} />} />
        </div>
        <div className="imgs">
          <div className="container_I">
            <Image src={blueImg} alt={'Blue'} className="image_l" />
            <div className="middle">
              <div className="text">John Doe_L</div>
            </div>
          </div>
          <div className="container_I">
            <Image src={purpleImg} alt={'Blue'} className="image_r" />
            <div className="middle">
              <div className="text">John Doe_R</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
