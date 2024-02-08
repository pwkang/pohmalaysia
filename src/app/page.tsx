import Layout from '../components/layout/layout';
import HeroSlider from '../components/layout/HeroSlider';
import History from '../components/templates/home/History';
import PastChairman from '../components/templates/home/PastChairman';
import AssociationLocation from '../components/templates/home/AssociationLocation';
import DonationReport from '../components/templates/home/DonationReport';
import { Metadata } from 'next';
import { defaultMetadata } from '@lib/default-metadata';

export default function Home() {
  return (
    <Layout>
      <HeroSlider />
      <History />
      <PastChairman />
      <AssociationLocation />
      <DonationReport />
    </Layout>
  );
}

export const metadata: Metadata = {
  ...defaultMetadata,
};
