import { Chakra } from '@components/Chakra';


const App = ({ Component, pageProps, cookies }) => {
  return (
    <Chakra cookies={cookies}>
      <DefaultSeo
        title="Nextjs + MDX Starter pack"
        description="This is an opinionated way to handle MDX from multiple sources in a Next project with some help styling from ChakraUI"
        url="www.whatever.com"
        ogImage={{
          url: 'www.whatever.com',
          title: 'OG Image title',
          description: 'Describe the OG image',
          image: ``,
          siteName: 'Your site name',
        }}
        twitter={{
          handle: '@domitriusclark',
          site: 'https://twitter.com/domitriusclark',
        }}
      />
      <Component {...pageProps} />
    </Chakra>
  );
};

export default App;

export { getServerSideProps } from '@components/Chakra';
