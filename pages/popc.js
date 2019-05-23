import React from 'react';
import FeatureSection from 'common/src/containers/App/FeatureSection';
import Box from 'reusecore/src/elements/Box';
import Image from 'reusecore/src/elements/Image';
import AppScreenshot from 'common/src/assets/image/app/mobile.png';
import Container from 'common/src/components/UI/Container';
import Text from 'reusecore/src/elements/Text';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Heading from 'reusecore/src/elements/Heading';
import PropTypes from 'prop-types';
let styleD={
  marginTop:'60px'
};
const Popc = ({
  row,
  col,
  title,
  titleI,
  description,
  image,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  imageArea,
  colI,
}) => {
  return (
    <div style={styleD}>
      <Container>
        <Box {...row}>
          <Box {...col} {...imageArea}>
            <Image src={AppScreenshot} alt="Domain Image" {...image} />
          </Box>
          <Box {...col}>
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
            />
          </Box>
        </Box>
        <Box {...sectionHeader}>
          <Text {...sectionSubTitle} />
          <Heading {...sectionTitle} />
        </Box>
        <Box {...row}>
          <Box {...colI}>
            <iframe
              width="520px"
              height="345px"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            />
          </Box>
          <Box {...col}>
            <FeatureBlock
              title={<Heading {...titleI} />}
              description={<Text {...description} />}
            />
          </Box>
        </Box>
      </Container>
      <FeatureSection />
    </div>
  );
};

Popc.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colI: PropTypes.object,
  title: PropTypes.object,
  titleI: PropTypes.object,
  description: PropTypes.object,
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
};

Popc.defaultProps = {
  sectionHeader: {
    mb: ['30px', '30px', '30px', '56px'],
    mt: '100px',
  },
  sectionSubTitle: {
    content: 'How It Works',
    as: 'span',
    display: 'block',
    fontSize: '14px',
    letterSpacing: '0.13em',
    fontWeight: '700',
    color: '#6c5c7a',
    mb: '10px',
    textAlign: ['center'],
  },
  // section title default style
  sectionTitle: {
    content: 'How it works Section Title',
    fontSize: ['20px', '24px', '24px', '24px', '30px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    textAlign: ['center'],
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
  colI: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '50%', '44%', '44%'],
    mr: '50px',
  },
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
  titleI: {
    content: 'Sub Title Iframe',
    //fontSize: ['26px', '30px', '30px', '48px', '60px'],
    fontWeight: 'bold',
    color: '#0f2137',
    letterSpacing: '-0.01px',
    mb: '10px',
    ml: '150px',
  },
  description: {
    content:
      'A mobile app landing page is important and  essential for right amount of information about your product. Start increasing your user base upon the launch of your product.',
    fontSize: '16px',
    color: '#343d48',
    lineHeight: '33px',
    mb: '10px',
  },
  image: {
    ml: '0',
    mt: '70px',
  },
};

export default Popc;
