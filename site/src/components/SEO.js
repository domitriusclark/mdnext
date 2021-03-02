import { NextSeo } from 'next-seo';

export default function SEO({ title, description, twitter, openGraph }) {
  return (
    <NextSeo
      title={title}
      description={description}
      twitter={twitter}
      openGraph={openGraph}
    />
  );
}
