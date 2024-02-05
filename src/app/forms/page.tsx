import React from 'react';
import Layout from '../../components/layout/layout';
import HeroSlider from '../../components/layout/HeroSlider';
import FormsDownload from '../../components/templates/forms/FormsDownload';

function Page() {
  return (
    <Layout>
      <HeroSlider />
      <FormsDownload />
    </Layout>
  );
}

export default Page;
