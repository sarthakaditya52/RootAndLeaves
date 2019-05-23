import React from 'react';
import PropTypes from 'prop-types';
import Container from "common/src/components/UI/Container";
import Box from "reusecore/src/elements/Box";
import Image from "reusecore/src/elements/Image";
import FeatureBlock from "common/src/components/FeatureBlock";
import Heading from "reusecore/src/elements/Heading";
import Text from "reusecore/src/elements/Text";

let linestyle={
    width: '100%',
    border: '1px solid #DC0036',
};


const Blog = ({
  row,
  col,
  title,
  description,
  image,
  sectionSubTitle,
  imageArea,

}) => {
    return (
        <Container>
            <Box>
                <FeatureBlock
                    title={<Heading {...title} />}
                    description={<Text
                        {...sectionSubTitle}
                    />}
                />
            </Box>
            <center>
                <Box>
                    <FeatureBlock
                        description={<Text {...description} />}
                    />
                </Box>
            </center>
            <Box {...row}>
                <Box {...col} {...imageArea}>
                    <Image src="https://assets-global.website-files.com/56e9debf633486e330198479/57b6723c0c7bdb62381c5e86_top-10-travel-bloggers-you-should-be-follow-danflyingsolo-danielclarke-lonelyplanet-skyscanner.jpg" alt="img" {...image}/>
                </Box>
                <Box {...col}>
                    <hr style={linestyle}/>
                    <FeatureBlock
                        description={<Text content="image details"/>}
                    />
                </Box>
            </Box>
            <center>
                <Box>
                    <FeatureBlock
                        description={<Text {...description} />}
                    />
                </Box>
            </center>
        </Container>
    );
};

Blog.propTypes={
    row: PropTypes.object,
    col: PropTypes.object,
    title: PropTypes.object,
    description: PropTypes.object,
    sectionSubTitle: PropTypes.object,
};
Blog.defaultProps={

    sectionSubTitle: {
        content: 'Blog Sub heading goes here',
        as: 'span',
        display: 'block',
        fontSize: '14px',
        letterSpacing: '0.13em',
        fontWeight: '500',
        color: 'grey',
        mb: '10px',
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
        mt: '-20px',
    },
    imageArea: {
        width: '80%',
    },
    title: {
        content:
            'Blog Heading Goes Here',
        fontSize: ['26px', '30px', '30px', '48px', '60px'],
        fontWeight: '300',
        color: '#0f2137',
        letterSpacing: '-0.01px',
        mb: '20px',
        mt: '50px',
    },
    description: {
        content:
            'A mobile app landing page is important and  essential for right amount of information about your product. Start increasing your user base upon the launch of your product.' +
            'There are so many travel bloggers out there, how do you decide who to follow? You\'re in luck! Our staff has rounded up the best of the best so you don\'t have to...\n' +
            '\n' +
            'As a travel blogger myself, The Social Girl Traveler, there are several travel bloggers I admire for their amazing creativity, talent, and sense of adventure.\n' +
            '\n' +
            'These travel bloggers literally influenced me to ‘get out and travel’. \n' +
            '\n' +
            'Whether it was through their writing or creative media, they\'ve inspired me to travel the world. \n' +
            '\n' +
            'Here are the top 10 travel bloggers you should already be following.\n' +
            '\n' +
            '1. Dan Flying Solo\n' +
            'Daniel is a British bloke who works with Skyscanner and LonelyPlanet on the regular. \n' +
            '\n' +
            'He’s an amazing writer with tons of useful tips, and is an even better photographer. I had the privilege of traveling with Daniel and working with him in India. There was never a dull moment! \n' +
            '\n' +
            'His photography has also been published in Beautiful Destination, Travel & Leisure, National Geographic, Travel Channel and Matador Network.',
        fontSize: '16px',
        color: '#343d48',
        lineHeight: '33px',
        mb: '10px',
        width: '70%',
        mt: '50px',
        textAlign: 'left',
    },
    image: {
        ml: '0',
        mt: '70px',
    },

};
export default Blog;
