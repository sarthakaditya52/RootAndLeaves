import React, { useState, useEffect } from 'react';
import { ConditionWrapper } from 'common/src/containers/App/app.style';
import DomainSection from 'common/src/containers/App/Banner';
import FeatureSection from 'common/src/containers/App/FeatureSection';
import ControllSection from 'common/src/containers/App/Control';
import FeatureSlider from 'common/src/containers/App/FeatureSlider';
import FeatureSliderTwo from 'common/src/containers/App/FeatureSliderTwo';
import PartnerHistory from 'common/src/containers/App/PartnerHistory';
import PaymentSection from 'common/src/containers/App/PaymentSection';
import TestimonialSection from 'common/src/containers/App/Testimonial';

class BodyId extends React.Component {
  componentWillMount() {
    document.body.id = 'ncolor';
  }

  componentWillUnmount() {
    document.body.id = null;
  }
  render() {
    return <div />;
  }
}

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

const Home = ({}) => {
  const size = process.browser && useWindowSize();
  return (
    <div>
      <BodyId />
      <DomainSection />
      <FeatureSection />
      <ControllSection />
      <ConditionWrapper id="keyfeature">
        {size.innerWidth > 1100 ? <FeatureSlider /> : <FeatureSliderTwo />}
      </ConditionWrapper>
      <PartnerHistory />
      <PaymentSection />
      <TestimonialSection />
    </div>
  );
};

export default Home;
