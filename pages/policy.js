import React from 'react';
import Layout from './Layout';
import PropTypes from 'prop-types';
import Container from 'common/src/components/UI/Container';
import Box from 'reusecore/src/elements/Box';
import Image from 'reusecore/src/elements/Image';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Heading from 'reusecore/src/elements/Heading';
import Text from 'reusecore/src/elements/Text';

let pstyle = {
  fontSize: '16px',
  color: '#343d48',
  lineHeight: '33px',
  mb: '10px',
  width: '55%',
  mt: '50px',
  textAlign: 'center',
};
let ustyle = {
  fontSize: '16px',
  color: '#343d48',
  lineHeight: '33px',
  mb: '10px',
  width: '70%',
  mt: '50px',
  textAlign: 'left',
};
let hrstyle = {
  width: '70%',
  marginTop: '35px',
  marginBottom: '35px',
  color: 'grey',
};

let listyle = {
  listStyleType: 'disk',
};
const Policy = ({
  nextHead,
  nextSubHead,
  title,
  description,
  image,
  sectionSubTitle,
}) => {
  return (
    <Layout
      content={
        <Container>
          <center>
            <Box>
              <FeatureBlock
                title={<Heading {...title} />}
                description={<Text {...sectionSubTitle} />}
              />
            </Box>
            <p style={pstyle}>
              Your privacy is important to Apple so we’ve developed a Privacy
              Policy that covers how we collect, use, disclose, transfer, and
              store your personal information.
            </p>
            <p style={pstyle}>
              In addition to this Privacy Policy, we provide data and privacy
              information imbedded in our products connected with our Data &
              Privacy Icon for certain features that ask to use your personal
              information.
            </p>
            <Image
              src="https://www.apple.com/legal/images/icon_dataprivacy.png"
              alt="group"
              {...image}
            />
            <p style={pstyle}>
              You can review this information before enabling these features, in
              Settings related to those features and/or online at{' '}
              <a href="/legal/privacy/">apple.com/legal/privacy</a>. Please take
              a moment to familiarize yourself with our privacy practices and{' '}
              <a href="contact/">contact us</a> if you have any questions.
              <br />
              &nbsp;
              <br />
              <a href="/legal/privacy/california-dnt/">
                Your California Privacy Disclosures
              </a>
              &nbsp;
              <br />
              <a href="canada-notice/">
                Information Regarding Commercial Electronic Messages in Canada
              </a>
              <br />
            </p>
            <hr style={hrstyle} />
            <Box>
              <FeatureBlock
                title={<Heading {...nextHead} />}
                description={<Text {...description} />}
              />
            </Box>
            <Box>
              <FeatureBlock title={<Heading {...nextSubHead} />} />
              <ul style={ustyle}>
                <li style={listyle}>
                  When you create an Apple ID, apply for commercial credit,
                  purchase a product, download a software update, register for a
                  class at an Apple Retail Store, connect to our services,
                  contact us including by social media or participate in an
                  online survey, we may collect a variety of information,
                  including your name, mailing address, phone number, email
                  address, contact preferences, device identifiers, IP address,
                  location information, credit card information and profile
                  information where the contact is via social media.
                </li>
                <li style={listyle}>
                  When you share your content with family and friends using
                  Apple products, send gift certificates and products, or invite
                  others to participate in Apple services or forums, Apple may
                  collect the information you provide about those people such as
                  name, mailing address, email address, and phone number. Apple
                  will use such information to fulfill your requests, provide
                  the relevant product or service, or for anti-fraud purposes.
                </li>
                <li style={listyle}>
                  In certain jurisdictions, we may ask for a government issued
                  ID in limited circumstances including when setting up a
                  wireless account and activating your device, for the purpose
                  of extending commercial credit, managing reservations, or as
                  required by law.
                </li>
              </ul>
            </Box>
          </center>
        </Container>
      }
    />
  );
};

Policy.propTypes = {
  nextHead: PropTypes.object,
  nextSubHead: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  sectionSubTitle: PropTypes.object,
};
Policy.defaultProps = {
  sectionSubTitle: {
    content: 'The Apple Privacy Policy was updated on May 9, 2019.',
    as: 'span',
    display: 'block',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'black',
    mb: '10px',
  },
  nextHead: {
    content: 'Collection and Use of Personal Information',
    as: 'span',
    display: 'block',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'black',
    mb: '10px',
    width: '70%',
    textAlign: 'left',
  },
  nextSubHead: {
    content: 'What personal information we collect',
    as: 'span',
    display: 'block',
    fontSize: '17px',
    fontWeight: 'bold',
    color: 'black',
    mb: '10px',
    width: '70%',
    textAlign: 'left',
  },
  title: {
    content: 'Privacy Policy',
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'black',
    mb: '20px',
    mt: '35px',
  },
  description: {
    content:
      'Personal information is data that can be used to identify or contact a single person.\n' +
      '\n' +
      'You may be asked to provide your personal information anytime you are in contact with Apple or an Apple affiliated company. Apple and its affiliates may share this personal information with each other and use it consistent with this Privacy Policy. They may also combine it with other information to provide and improve our products, services, content, and advertising. You are not required to provide the personal information that we have requested, but, if you chose not to do so, in many cases we will not be able to provide you with our products or services or respond to any queries you may have.\n' +
      '\n' +
      'Here are some examples of the types of personal information Apple may collect and how we may use it:',
    fontSize: '16px',
    color: '#343d48',
    lineHeight: '33px',
    mb: '10px',
    width: '70%',
    textAlign: 'left',
  },
  image: {
    width: '5%',
  },
};
export default Policy;
