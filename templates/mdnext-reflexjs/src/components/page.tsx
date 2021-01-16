import hydrate from 'next-mdx-remote/hydrate';
import { MdxPage } from 'types';
import { MdxComponents } from '.';

export interface PageProps {
  page: MdxPage;
}

export function Page({ page }: PageProps) {
  const { mdx } = page;
  const content = hydrate(mdx, {
    components: MdxComponents,
  });

  return <article>{content}</article>;
}
