import React from 'react';
import Layout from '../../components/layout/layout';
import HeroSlider from '../../components/layout/HeroSlider';
import About from '../../components/templates/poh-about/About';

function Page() {
  return (
    <Layout>
      <HeroSlider />
      <About />
    </Layout>
  );
}

export default Page;
