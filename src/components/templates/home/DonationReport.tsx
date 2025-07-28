import Image from 'next/image';
import Container from '../../Container';

function DonationReport() {
  return (
    <Container className="mt-6 overflow-hidden">
      <Image src="/img/home/donation-report.jpg" alt="捐款报告" width={1200} height={1665} />
    </Container>
  );
}

export default DonationReport;
