import Layout from '../components/layout/layout';
import HeroSlider from '../components/layout/HeroSlider';
import History from '../components/templates/home/History';
import AssociationLocation from '../components/templates/home/AssociationLocation';
import DonationReport from '../components/templates/home/DonationReport';
import { Metadata } from 'next';
import { defaultMetadata } from '@lib/default-metadata';

export default function Home() {
  return (
    <Layout>
      <HeroSlider />
      <div className="container mx-auto px-4">
        <History />
        <AssociationLocation />
        <DonationReport />
      </div>
    </Layout>
  );
}

export const metadata: Metadata = {
  ...defaultMetadata,
};
