import React from 'react';
import Box from 'reusecore/src/elements/Box';
import Container from 'common/src/components/UI/Container';
import Text from 'reusecore/src/elements/Text';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Heading from 'reusecore/src/elements/Heading';
import PropTypes from 'prop-types';

let styleD = {
  marginTop: '150px',
};
let istyle = {
  marginLeft: '60px',
};
let istyle2 = {
  width: '100%',
  position: 'relative',
  marginTop: '40px',
  marginBottom: '20px',
};
let istyle3 = {
  display: 'block',
  width: '100%',
  fontSize: '15px',
  color: '#555555',
  lineHeight: '1.2',
  borderBottom: '2px solid #adadad',
};

const Contact = ({
  row,
  col,
  title,
  FormIinline,
  description,
  Button,
  input2,
  wrapInput2,
  sectionSubTitle,
}) => {
  return (
    <div style={styleD}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <Container>
        <Box {...row}>
          <Box {...col}>
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
            />
            <Box {...row}>
              <i className="fa fa-map-marker fa-fw" style={istyle} />
              Address Goes Here
            </Box>
            <Box {...row}>
              <i className="fa fa-phone fa-fw" style={istyle} /> Phone No. Goes
              Here
            </Box>
          </Box>
          <Box {...col}>
            <FeatureBlock title={<Heading {...sectionSubTitle} />} />
            <form style={FormIinline}>
              <div style={wrapInput2}>
                <input
                  type="text"
                  name="name"
                  style={input2}
                  placeholder="Name 1"
                />
              </div>

              <div style={wrapInput2}>
                <input
                  type="text"
                  name="email"
                  style={input2}
                  placeholder="Name 2"
                />
              </div>

              <div style={wrapInput2}>
                <input
                  type="text"
                  name="name"
                  style={input2}
                  placeholder="Name 3"
                />
              </div>

              <div style={wrapInput2}>
                <input
                  type="text"
                  name="email"
                  style={input2}
                  placeholder="Name 4"
                />
              </div>
              <div style={istyle2}>
                <textarea
                  name="message"
                  style={istyle3}
                  placeholder="Message"
                />
              </div>
              <button style={Button}>Send Your Message</button>
            </form>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

Contact.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  FormIinline: PropTypes.object,
  Button: PropTypes.object,
  input2: PropTypes.object,
  description: PropTypes.object,
  wrapInput2: PropTypes.object,
  sectionSubTitle: PropTypes.object,
};

Contact.defaultProps = {
  input2: {
    display: 'block',
    width: '90%',
    fontSize: '15px',
    color: '#555555',
    lineHeight: '1.2',
    borderBottom: '2px solid #adadad',
  },
  sectionSubTitle: {
    content: 'Contact Us Form Heading',
    as: 'span',
    display: 'block',
    fontSize: '14px',
    letterSpacing: '0.13em',
    fontWeight: '700',
    color: 'black',
    mb: '10px',
    textAlign: ['center'],
  },
  // section title default style
  wrapInput2: {
    width: '50%',
    position: 'relative',
    marginTop: '40px',
    marginBottom: '20px',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    mt: '50px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: '50%',
    mt: '-80px',
  },
  title: {
    content: 'Contact Us Heading goes here',
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#0f2137',
    letterSpacing: '-0.01px',
    mb: '20px',
  },
  FormIinline: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
  },
  Button: {
    backgroundColor: '#1169AC',
    border: 'none',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '40px',
    marginLeft: '32%',
  },
  description: {
    content: 'Paragraph explaining this',
    fontSize: '16px',
    color: '#343d48',
    lineHeight: '33px',
    mb: '10px',
    ml: '25%',
  },
};

export default Contact;
