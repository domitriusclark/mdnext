import Link from 'next/link';

const navbar = {
  display: 'flex',
  padding: '5 4',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'flex-end',
};

export default function Navbar() {
  return (
    <nav style={navbar} className="px-4 py-8">
      <div>
        <Link passHref href="/">
          <a className="mdnext-nav__item">Home</a>
        </Link>
        <Link passHref href="/all-data">
          <a className="mdnext-nav__item">Data</a>
        </Link>
      </div>
    </nav>
  );
}
