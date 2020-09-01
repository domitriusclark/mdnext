import Link from 'next/link';

export default function ContentBox({ data }) {
  return (
    <Link href={`/data/${data.slug}`}>
      <div>
        <div>
          <div>
            <p>{data.title}</p>
            <p> By: {data.author}</p>
            <p>{data.description}</p>
          </div>
          <div direction="row" spacing={8}>
            {data.tags.map((tag) => (
              <p key={tag}>#{tag}</p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
