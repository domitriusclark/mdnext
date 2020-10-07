import tw from 'twin.macro';
import Link from 'next/link';

export default function ContentBox({ data }) {
  return (
    <Link href={`/data/${data.slug}`} passHref={true}>
      <a tw="lg:border lg:border-gray-400 px-4 py-8 mx-auto lg:mx-0 mb-8 lg:mt-16 hover:bg-gray-200">
        <div>
          <div>
            <p tw="text-xl font-bold">{data.title}</p>
            <p> By: {data.author}</p>
            <p>{data.description}</p>
          </div>
          <div direction="row" spacing={8}>
            {data.tags.map((tag) => (
              <p key={tag}>#{tag}</p>
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
}
