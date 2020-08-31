import Link from 'next/link';

const navbar = {
  display: 'flex',
  padding: '5 4',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'flex-end'
}

export default function Navbar() {
  return (
    <div style={navbar}>
      <div>
        <Link style={{ margin: "10px 0px" }} href="/">
          Home
        </Link>
        <Link style={{ margin: "10px 0px" }} href="/all-data">
          Data
        </Link>
      </div>
    </div>
  );
}
