import { NextSeo } from 'next-seo';

// defaultProps 
/*
  title='Nextjs + MDX Starter pack'
  description='This is an opinionated way to handle MDX from multiple sources in a Next project with some help styling from ChakraUI'
  url='www.whatever.com'
  openGraph={{
    url: 'www.whatever.com',
    title: 'OG Image title',
    description: 'Describe the OG image',
    image: `${url}/${image}`
    siteName: 'Your site name'
  }}
  twitter:{{
    handle: '@domitriusclark',
    site: 'https://twitter.com/domitriusclark',
  }}
*/

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
        url: ogImage.url,
        title: ogImage.title,
        description: ogImage.description,
        images: [{ ...ogImage.image }],
        site_name: ogImage.siteName,
      }}
      twitter={{
        handle: twitter.handle,
        site: twitter.site,
        cardType: 'summary_large_image',
      }}
    />
  )
}