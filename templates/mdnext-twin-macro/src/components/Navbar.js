import Link from 'next/link';
import tw, { css } from 'twin.macro';

export default function Navbar() {
  return (
    <div tw="flex py-5 px-4 w-full justify-center lg:items-end text-2xl bg-blue-200">
      <div tw="text-black">
        <Link href="/" passHref={true}>
          <a tw="hover:bg-blue-900 hover:text-white py-6 px-3">Home</a>
        </Link>
        <Link href="/all-data" passHref={true}>
          <a tw="hover:bg-blue-900 hover:text-white py-6 px-3">Data</a>
        </Link>
      </div>
    </div>
  );
}
