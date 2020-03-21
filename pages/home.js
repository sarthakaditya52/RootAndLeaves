import React from 'react';
import Layout from './Layout';
import DomainSection from 'common/src/containers/App/Banner';
import FeatureSection from 'common/src/containers/App/FeatureSection';
import ControllSection from 'common/src/containers/App/Control';
import PartnerHistory from 'common/src/containers/App/PartnerHistory';
import PaymentSection from 'common/src/containers/App/PaymentSection';
import TestimonialSection from 'common/src/containers/App/Testimonial';

const Home = () => {
  return (
    <Layout
      content={
        <div>
          <DomainSection />
          <FeatureSection />
          <ControllSection />
          <PartnerHistory />
          <PaymentSection />
          <TestimonialSection />
        </div>
      }
    />
  );
};

export default Home;
