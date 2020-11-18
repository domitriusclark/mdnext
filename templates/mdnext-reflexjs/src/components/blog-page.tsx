import hydrate from 'next-mdx-remote/hydrate';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from 'reflexjs';
import { BlogPost } from 'types';
import { BlogMeta, MdxComponents } from '.';

export interface BlogPageProps {
  blog: BlogPost;
}

export function BlogPage({ blog }: BlogPageProps) {
  const { mdx, data } = blog;
  const content = hydrate(mdx, {
    components: MdxComponents,
  });
  return (
    <div variant="container.sm" py="4|10|12">
      <article>
        <h1 variant="heading.title">{blog.data.title}</h1>
        {data.excerpt ? (
          <p variant="text.lead" mt="4">
            {data.excerpt}
          </p>
        ) : null}
        <BlogMeta blog={blog} />
        <hr />
        {data.image ? (
          <figure
            position="relative"
            height="250px|350px|450px"
            rounded="sm"
            overflow="hidden"
          >
            <Image
              src={data.image}
              alt={data.caption || data.title}
              layout="fill"
            />
          </figure>
        ) : null}
        {data.caption ? (
          <figcaption textAlign="center" mt="4" fontSize="sm">
            {data.caption}
          </figcaption>
        ) : null}
        {content}
        <Link href="/" passHref>
          <a
            display="inline-flex"
            mt="8"
            alignItems="center"
            color="primary"
            textDecoration="none"
            _hover={{
              textDecoration: 'underline',
            }}
          >
            <Icon name="arrow" size="4" transform="rotate(180deg)" mr="2" />
            Back to blog
          </a>
        </Link>
      </article>
    </div>
  );
}
