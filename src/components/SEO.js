import { NextSeo } from 'next-seo';

export default function SEO({
  title,
  description,
  twitter,
  favicon,
  ogImage,
  url
}) {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url: ogImage.url || '',
        title: ogImage.title || '',
        description: ogImage.description || '',
        images: [{ ...ogImage.image }] || [],
        site_name: ogImage.siteName || '',
      }}
      twitter={{
        handle: twitter.handle || '',
        site: twitter.site || '',
        cardType: 'summary_large_image',
      }}
      favicon={favicon || ''}
    />
  )
}