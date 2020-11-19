import SEO from '@components/SEO';

export function Layout({ props, children }) {
  return (
    <>
      <SEO {...props} />
      <div
        style={{
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 0,
          backgroundColor: '#090d12',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </div>
    </>
  );
}
