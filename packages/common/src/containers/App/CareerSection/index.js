import CareerSectionWrapper from './CareerSection.style';
import Container from '../../../components/UI/Container';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import data from '../../../data/App/FeatureSection';
import FeatureBlock from '../../../components/FeatureBlock';
import PropTypes from 'prop-types';
import React from 'react';

const CareerSection = ({
  row,
  col,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
}) => {
  return (
    <CareerSectionWrapper id="services">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            {data.features.map((feature, index) => (
              <Box className="row" {...row} key={index}>
                <FeatureBlock
                  wrapperStyle={blockWrapperStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={<Heading content={feature.title} {...featureTitle} />}
                  description={
                    <Text
                      content={feature.description}
                      {...featureDescription}
                    />
                  }
                />
              </Box>
            ))}
          </Box>
          <Box className="col" {...col} />
          <Box className="col" {...col}>
            {data.features.map((feature, index) => (
              <Box className="row" {...row} key={index}>
                <FeatureBlock
                  wrapperStyle={blockWrapperStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={<Heading content={feature.title} {...featureTitle} />}
                  description={
                    <Text
                      content={feature.description}
                      {...featureDescription}
                    />
                  }
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </CareerSectionWrapper>
  );
};

// CareerSection style props
CareerSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// FeatureSection default style
CareerSection.defaultProps = {
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 3, 1 / 3, 1 / 3],
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['20px', '20px', '20px', '40px'],
  },
  // feature icon default style
  iconStyle: {
    width: '84px',
    height: '84px',
    m: '0 auto',
    borderRadius: '50%',
    bg: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    color: '#29cf8a',
    overflow: 'hidden',
    mb: ['20px', '20px', '20px', '30px'],
    border: '1px solid rgba(36, 74, 117,0.1)',
  },
  // feature content default style
  contentStyle: {
    textAlign: 'center',
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '20px'],
    letterSpacing: '-0.020em',
  },
  // feature description default style
  featureDescription: {
    fontSize: ['14px', '15px'],
    lineHeight: '1.75',
    color: '#343d48',
  },
};

export default CareerSection;
