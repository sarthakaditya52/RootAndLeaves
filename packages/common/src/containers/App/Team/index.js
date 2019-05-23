import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import FeatureBlock from '../../../components/FeatureBlock';
import data from '../../../data/App/Team';
import Container from '../../../components/UI/Container';
import TeamWrapper from './team.style';



let linestyle={
    width: '80px',
    border: '1px solid #DC0036',
};

let ConStyle={
};

const Team = ({
                            row,
                            col,
                            sectionHeader,
                            sectionSubTitle,
                            featureName,
                            featureTitle,
                            featureDescription,
                            iconStyle,
                            contentStyle,
                            blockWrapperStyle,
                        }) => {
    return (
        <TeamWrapper id="services">
            <div style={ConStyle}>
            <Container>
                <Box {...sectionHeader}>
                    <Text {...sectionSubTitle} />
                    <hr style={linestyle}/>
                </Box>
                <Box className="row" {...row}>
                    {data.features.map((feature, index) => (
                        <Box className="col" {...col} key={index}>
                            <FeatureBlock
                                icon={<img src={feature.icon} alt={index} width="200px" height="200px"/>}
                                wrapperStyle={blockWrapperStyle}
                                iconStyle={iconStyle}
                                contentStyle={contentStyle}
                                name={<Heading content={feature.name} {...featureName} />}
                                title={<Text content={feature.title} {...featureTitle} />}
                                description={
                                    <Text content={feature.description} {...featureDescription} />
                                }
                            />
                        </Box>
                    ))}
                </Box>
            </Container>
            </div>
        </TeamWrapper>
    );
};

// Team style props
Team.propTypes = {
    sectionHeader: PropTypes.object,
    row: PropTypes.object,
    col: PropTypes.object,
    sectionSubTitle: PropTypes.object,
    featureName: PropTypes.object,
    featureTitle: PropTypes.object,
    featureDescription: PropTypes.object,
};

// Team default style
Team.defaultProps = {
    // section header default style
    sectionHeader: {
        mb: ['30px', '30px', '30px', '56px'],
    },
    // sub section default style
    sectionSubTitle: {
        content: 'Our Core Team',
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
        width: '200px',
        height: '200px',
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
    featureName: {
        fontSize: ['18px', '20px'],
        fontWeight: '400',
        color: '#0f2137',
        lineHeight: '1.5',
        mb: ['10px', '10px', '10px', '20px'],
        letterSpacing: '-0.020em',
    },
    // feature title default style
    featureTitle: {
        fontSize: '15px',
        fontWeight: '300',
        color: '#DC0036',
        lineHeight: '1.5',
        mb: ['10px', '10px', '10px', '20px'],
        mt: '-20px',
        letterSpacing: '-0.020em',
    },
    // feature description default style
    featureDescription: {
        fontSize: ['14px', '15px'],
        lineHeight: '1.75',
        color: '#343d48',
    },
};

export default Team;
