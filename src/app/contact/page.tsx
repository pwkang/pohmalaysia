import React from 'react';
import Layout from '../../components/layout/layout';
import HeroSlider from '../../components/layout/HeroSlider';
import ContactInfo from '../../components/templates/contact/ContactInfo';

function Page() {
  return (
    <Layout>
      <HeroSlider />;
      <ContactInfo />
    </Layout>
  );
}

export default Page;
