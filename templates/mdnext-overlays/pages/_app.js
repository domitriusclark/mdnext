import { Chakra } from '@components/Chakra';

export default function App({ Component, pageProps, cookies }) {
  return (
    <Chakra cookies={cookies}>
      <Component {...pageProps} />
    </Chakra>
  );
}

export { getServerSideProps } from '@components/Chakra';
