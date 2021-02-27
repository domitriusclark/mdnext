import { Layout, Page } from '@components';
import { getMdxPaths, getMdxContent } from '@utils';
import config from '@config';
import { MdxPage } from 'types';
import { NextSeo } from 'next-seo';

export interface MdxPageProps {
  page: MdxPage;
}

export default function PagePage({ page }: MdxPageProps) {
  return (
    <Layout>
      <NextSeo title={page.data.title} description={page.data.excerpt} />
      <Page page={page} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const mdxPaths = await getMdxPaths(config.page.contentPath);
  const paths = mdxPaths.map(({ slug }) => ({
    params: {
      slug: slug.split('/'),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const [page] = await getMdxContent(
    config.page.contentPath,
    slug ? slug.join('/') : '',
  );

  return {
    props: {
      page,
    },
  };
}
