import React, { Component } from 'react';
import $ from 'jquery';
import blueImg from 'common/src/assets/image/about/2.png';
import purpleImg from 'common/src/assets/image/about/1.png';
import buttong from 'common/src/assets/image/about/3.png';
import buttonw from 'common/src/assets/image/about/4.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';

let style_bW = {
  position: 'absolute',
  top: '500px',
  left: '0px',
  cursor: 'pointer',
};
let style_c8 = {
  position: 'relative',
  height: '550px',
  backgroundColor: '#f1f3f4',
};

let style_mt = {
  position: 'absolute',
  right: '130px',
  top: '170px',
  width: '200px',
  zIndex: '200',
  color: 'white',
  textAlign: 'justify',
};

let style_bg = {
  position: 'absolute',
  top: '500px',
  left: '60px',
  cursor: 'pointer',
};

class About extends Component {
  /*

    }
    function

    }*/
  constructor() {
    super();
    this.state = {
      title:
        "Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it",
      style_Ib: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: '80%',
        height: '500px',
      },
      style_Ip: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: '60%',
        height: '500px',
        zIndex: '100',
      },
    };
  }

  handleClick(x) {
    if (x == 1) {
      this.setState({
        title:
          "Many users already have downloaded Bootstrap from MaxCDN when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it",
      });
    }
    if (x == 2) {
      this.setState({
        title:
          'This method gradually changes the opacity, for selected elements, from visible to hidden (fading effect).',
      });
    }
  }

  changewidth(x) {
    var maintext = document.getElementById('maintext');

    if (x === 'purple') {
      this.setState({
        style_Ip: {
          position: 'absolute',
          right: 0,
          top: 0,
          height: '500px',
          width: '75%',
          transition: 'width 1s',
          zIndex: '100',
        },
        style_Ib: {
          position: 'absolute',
          right: 0,
          top: 0,
          height: '500px',
          width: '85%',
          transition: 'width 1s',
        },
      });
      $('#maintext').fadeOut();
      //maintext.style.display ="none";
      setTimeout(function() {
        maintext.style.right = 130 + 'px';
        $('#maintext').fadeIn();
      }, 700);
    }

    if (x === 'blue') {
      this.setState({
        style_Ib: {
          position: 'absolute',
          right: 0,
          top: 0,
          height: '500px',
          width: '100%',
          transition: 'width 1s',
        },
        style_Ip: {
          position: 'absolute',
          right: 0,
          top: 0,
          height: '500px',
          width: '55%',
          transition: 'width 1s',
          zIndex: '100',
        },
      });

      $('#maintext').fadeOut();
      //maintext.style.display ="none";
      setTimeout(function() {
        maintext.style.right = elem1.clientWidth - 60 + 'px';
        $('#maintext').fadeIn();
      }, 700);
    }
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8" style={style_c8}>
              <img
                src={purpleImg}
                style={this.state.style_Ip}
                id="elem1"
                ref="purple"
                onMouseOver={e => this.changewidth('purple')}
              />
              <img
                src={blueImg}
                style={this.state.style_Ib}
                id="elem2"
                ref="blue"
                onMouseOver={e => this.changewidth('blue')}
              />
              <p id="maintext" style={style_mt}>
                <span>About Us</span>
                <br />
                <br />
                <span ref="text1">{this.state.title}</span>
              </p>
              <img
                src={buttonw}
                style={style_bW}
                onClick={e => this.handleClick(1)}
              />
              <img
                src={buttong}
                style={style_bg}
                onClick={e => this.handleClick(2)}
              />
            </div>

            <div className="col-md-2" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
