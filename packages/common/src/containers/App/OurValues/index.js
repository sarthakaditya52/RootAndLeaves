import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import FeatureBlock from '../../../components/FeatureBlock';
import data from '../../../data/App/OurValues';
import Container from '../../../components/UI/Container';
import FeatureSectionWrapper from './ourvalues.style';

let linestyle={
    width: '60px',
    border: '1px solid #DC0036',
};


const OurValues = ({
                            row,
                            col,
                            sectionHeader,
                            sectionSubTitle,
                            featureTitle,
                            iconStyle,
                            contentStyle,
                            blockWrapperStyle,
                        }) => {
    return (
        <FeatureSectionWrapper id="services">
            <Container>
                <Box {...sectionHeader}>
                    <Text {...sectionSubTitle} />
                    <hr style={linestyle}/>
                </Box>
                <Box className="row" {...row}>
                    {data.features.map((feature, index) => (
                        <Box className="col" {...col} key={index}>
                            <FeatureBlock
                                icon={<i className={feature.icon} />}
                                wrapperStyle={blockWrapperStyle}
                                iconStyle={iconStyle}
                                contentStyle={contentStyle}
                                title={<Heading content={feature.title} {...featureTitle} />}
                            />
                        </Box>
                    ))}
                </Box>
            </Container>
        </FeatureSectionWrapper>
    );
};

// FeatureSection style props
OurValues.propTypes = {
    sectionHeader: PropTypes.object,
    row: PropTypes.object,
    col: PropTypes.object,
    sectionSubTitle: PropTypes.object,
    featureTitle: PropTypes.object,
};

// FeatureSection default style
OurValues.defaultProps = {
    // section header default style
    sectionHeader: {
        mb: ['30px', '30px', '30px', '56px'],
    },
    // sub section default style
    sectionSubTitle: {
        content: 'Our Values',
        as: 'span',
        display: 'block',
        fontSize: '14px',
        letterSpacing: '0.13em',
        fontWeight: '500',
        color: 'black',
        mb: '10px',
        textAlign: ['center'],
    },
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
};

export default OurValues;
