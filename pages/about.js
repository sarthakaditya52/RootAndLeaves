import React from 'react';
import Container from 'common/src/components/UI/Container';
import Box from 'reusecore/src/elements/Box';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Heading from 'reusecore/src/elements/Heading';
import Text from 'reusecore/src/elements/Text';
import PropTypes from 'prop-types';
import Dia from 'common/src/assets/image/about/iconD.png';
import Image from 'reusecore/src/elements/Image';
import OurValues from 'common/src/containers/App/OurValues';
import Team from 'common/src/containers/App/Team';

let linestyle = {
  width: '60px',
  border: '1px solid #DC0036',
};

let DivS = {
  marginTop: '50px',
};

const About = ({ title, description, image, sectionSubTitle, imageArea }) => {
  return (
    <div style={DivS}>
      <Container>
        <Box>
          <center>
            <FeatureBlock description={<Heading {...sectionSubTitle} />} />
            <hr style={linestyle} />
            <FeatureBlock title={<Heading {...title} />} />
            <Box>
              <FeatureBlock description={<Text {...description} />} />
            </Box>
            <Box {...imageArea}>
              <Image src={Dia} alt="diamond" {...image} />
            </Box>
          </center>
          <OurValues />
          <Team />
        </Box>
      </Container>
    </div>
  );
};

About.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  sectionSubTitle: PropTypes.object,
};

About.defaultProps = {
  sectionSubTitle: {
    content: 'What we Do',
    as: 'span',
    display: 'block',
    fontSize: '14px',
    letterSpacing: '0.13em',
    fontWeight: '500',
    color: 'black',
    mb: '10px',
    textAlign: ['center'],
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  imageArea: {
    width: '4%',
  },
  title: {
    content: 'About Us heading',
    fontSize: '75px',
    fontWeight: '1000',
    color: 'rgb(108, 92, 122)',
    letterSpacing: '-0.01px',
    mb: '20px',
    textAlign: ['center'],
    mt: '20px',
  },
  description: {
    content:
      'A mobile app landing page is important and  essential for right amount of information about your product. Start increasing your user base upon the launch of your product.' +
      "There are so many travel bloggers out there, how do you decide who to follow? You're in luck! Our staff has rounded up the best of the best so you don't have to...\n" +
      '\n' +
      'As a travel blogger myself, The Social Girl Traveler, there are several travel bloggers I admire for their amazing creativity, talent, and sense of adventure',
    fontSize: '16px',
    color: '#343d48',
    lineHeight: '33px',
    mb: '10px',
    width: '60%',
    textAlign: 'center',
  },
  image: {
    ml: '0',
    mt: '70px',
  },
};

export default About;
