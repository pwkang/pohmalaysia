import Layout from '@/components/layout/layout';
import { defaultMetadata } from '@/lib//default-metadata';

function PageNotFound() {
  return (
    <Layout>
      <div className="flex items-center justify-center">Page not found</div>
    </Layout>
  );
}

export const metadata = {
  ...defaultMetadata,
  title: 'Page Not Found',
};

export default PageNotFound;
