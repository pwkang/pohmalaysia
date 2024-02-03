import Layout from '../components/layout/layout';
import HeroSlider from '../components/layout/HeroSlider';
import History from '../components/templates/home/History';
import PastPresident from '../components/templates/home/PastPresident';
import AssociationLocation from '../components/templates/home/AssociationLocation';
import DonationReport from '../components/templates/home/DonationReport';

export default function Home() {
  return (
    <Layout>
      <HeroSlider />
      <History />
      <PastPresident />
      <AssociationLocation />
      <DonationReport />
    </Layout>
  );
}
