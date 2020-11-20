import Link from 'next/link';
import { Icon } from 'reflexjs';
import { BlogPost } from 'types';
import { BlogMeta } from '.';

export interface BlogTeaserProps {
  blog: BlogPost;
}

export function BlogTeaser({ blog, ...props }: BlogTeaserProps) {
  return (
    <article {...props}>
      <hr my="12|16" />
      <BlogMeta blog={blog} fontSize="sm" />
      <h2 variant="heading.h2" my="4">
        <Link href={blog.url} passHref>
          <a
            color="heading"
            textDecoration="none"
            _hover={{
              color: 'primary',
            }}
          >
            {blog.data.title}
          </a>
        </Link>
      </h2>
      {blog.data.excerpt ? (
        <p variant="text.paragraph" mt="0">
          {blog.data.excerpt}
        </p>
      ) : null}
      <Link href={blog.url} passHref>
        <a
          display="inline-flex"
          lineHeight="none"
          alignItems="center"
          fontSize="sm"
          color="text"
          textDecoration="none"
          _hover={{
            color: 'primary',
          }}
        >
          Read more <Icon name="arrow" size="4" ml="2" />
        </a>
      </Link>
    </article>
  );
}
