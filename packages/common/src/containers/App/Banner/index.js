import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
//import Card from 'reusecore/src/elements/Card';
import Image from 'reusecore/src/elements/Image';
import Input from 'reusecore/src/elements/Input';
import FeatureBlock from '../../../components/FeatureBlock';
// import ParticlesComponent from '../particles';
import Container from '../../../components/UI/Container';
import { email } from 'react-icons-kit/ionicons/email';
import { Icon } from 'react-icons-kit';
import { ic_arrow_forward } from 'react-icons-kit/md/ic_arrow_forward';
import { BannerSquareShape, BannerCircleShape } from '../app.style';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.cjs.css';

import {
  DiscountWrapper,
  DiscountLabel,
  ButtonWrapper,
  EmailInputWrapper,
} from './banner.style';

import AppScreenshot from '../../../assets/image/app/mobile.png';

let posB = {
  marginLeft: '0',
};

const DomainSection = ({
  SectionWrapper,
  row,
  col,
  title,
  description,
  button,
  image,
  imageArea,
  btnStyle,
  btnStyleTwo,
  textArea,
  discountAmount,
  discountText,
}) => {
  return (
    <Box {...SectionWrapper}>
      {/* <ParticlesComponent /> */}
      <BannerSquareShape />
      <BannerCircleShape />
      <Container>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={80}
          totalSlides={3}
        >
          <Slider>
            <Slide index={0}>
              <Box {...row}>
                <Box {...col}>
                  <Box>
                    <DiscountWrapper>
                      <DiscountLabel>
                        <Text {...discountAmount} className="discountAmount" />
                        <Text {...discountText} />
                      </DiscountLabel>
                    </DiscountWrapper>
                  </Box>
                  <FeatureBlock
                    title={<Heading {...title} />}
                    description={<Text {...description} />}
                  />
                  <EmailInputWrapper>
                    <Input
                      inputType="email"
                      placeholder="Enter Email Address"
                      iconPosition="left"
                    />
                  </EmailInputWrapper>
                  <ButtonWrapper>
                    <Link href="#services">
                      <a>
                        <Button {...button} {...btnStyle} />
                      </a>
                    </Link>
                    <Link href="#">
                      <a>
                        <Button
                          {...button}
                          {...btnStyleTwo}
                          icon={<Icon icon={ic_arrow_forward} />}
                          className="withoutBg"
                        />
                      </a>
                    </Link>
                  </ButtonWrapper>
                </Box>
                <Box {...col} {...imageArea}>
                  <Image src={AppScreenshot} alt="Domain Image" {...image} />
                </Box>
              </Box>
            </Slide>
            <Slide index={1}>I am the second Slide.</Slide>
            <Slide index={2}>I am the third Slide.</Slide>
          </Slider>
          <ButtonBack className="backbtn">&lt;</ButtonBack>
          <ButtonNext className="nxtbtn">&gt;</ButtonNext>
        </CarouselProvider>
      </Container>
    </Box>
  );
};

DomainSection.propTypes = {
  SectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  btnStyle: PropTypes.object,
  btnStyleTwo: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  textArea: PropTypes.object,
};

DomainSection.defaultProps = {
  SectionWrapper: {
    as: 'section',
    pt: '80px',
    pb: '80px',
    overflow: 'hidden',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '50%', '44%', '44%'],
    mt: '-80px',
  },
  // textArea: {
  // 	width: [1, '42%'],
  // },
  imageArea: {
    width: ['0%', '0%', '43%', '35%', '50%'],
    ml: 'auto',
  },
  title: {
    content:
      'Abord SocialBUS and Start your Carrier in what you Interested in.',
    fontSize: ['26px', '30px', '30px', '48px', '60px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.01px',
    mb: '20px',
  },
  description: {
    content:
      'A mobile app landing page is important and  essential for right amount of information about your product. Start increasing your user base upon the launch of your product.',
    fontSize: '16px',
    color: '#343d48',
    lineHeight: '33px',
    mb: '10px',
  },
  button: {
    title: 'EXPLORE MORE',
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
  image: {
    ml: 'auto',
    mt: '70px',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
  btnStyleTwo: {
    title: 'WATCH DEMOS',
    type: 'button',
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    ml: '15px',
    bg: '#fff',
    color: 'rgb(108, 92, 122)',
  },
  textArea: {
    width: ['100%', '100%', '50%', '55%', '55%'],
  },
  discountAmount: {
    content: 'update',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    mb: 0,
    as: 'span',
    mr: '0.4em',
    bg: 'rgb(108, 92, 122)',
  },
  discountText: {
    content: 'Version 2.5.0 has just released .',
    fontSize: '13px',
    fontWeight: '400',
    color: '#0f2137',
    mb: 0,
    as: 'span',
    ml: '10px',
  },
};

export default DomainSection;
