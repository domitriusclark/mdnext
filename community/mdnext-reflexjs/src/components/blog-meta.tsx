import { BlogPost } from 'types';

export interface BlogMetaProps {
  blog: BlogPost;
}

export function BlogMeta({ blog, ...props }: BlogMetaProps) {
  return (
    <div
      display="flex"
      flexDirection="column|row"
      fontFamily="sans"
      color="gray"
      mt="4"
      {...props}
    >
      {blog.data.author ? (
        <span display="inline-block" mr="4">
          Posted by <strong fontWeight="semibold">{blog.data.author}</strong>
        </span>
      ) : null}
      <span mt="2|0">
        <span>{blog.data.date}</span>
        {blog.readingTime ? <span ml="2">- {blog.readingTime}</span> : null}
      </span>
    </div>
  );
}
