import Link from 'next/link';

// Example (with modifications) from https://tailwindcss.com/components/cards
const OUTER_CSS =
  'max-w-md rounded block overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-shadow duration-300 mx-auto mb-4 md:mb-8 px-4 py-4 md:py-6';
const TITLE_CSS = 'font-bold text-xl mb-2';
const PAR_CSS = 'text-gray-700 text-base mb-2';
const BYLINE_CSS = 'text-gray-700 text-sm leading-none';
const TAG_CONTAINER_CSS = 'mt-6 -mb-1';
const TAG_CSS =
  'inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2';
const ICON_CSS = 'h-4 w-4 inline-block align-text-bottom text-gray-500 mr-2';

// Icon from https://heroicons.com
function UserIcon() {
  return (
    <svg
      className={ICON_CSS}
      fill="none"
      viewBox="0 0 20 20"
      stroke="currentColor"
      role="img"
      aria-label="user"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
      ></path>
    </svg>
  );
}

export default function ContentBox({ data }) {
  return (
    <Link href={`/data/${data.slug}`} passHref>
      <a className={OUTER_CSS}>
        <div>
          <div>
            <h2 className={TITLE_CSS}>{data.title}</h2>
            <p className={PAR_CSS}>{data.description}</p>
            <p className={BYLINE_CSS}>
              <UserIcon />
              {data.author}
            </p>
          </div>
          <div direction="row" spacing={8} className={TAG_CONTAINER_CSS}>
            {data.tags.map((tag) => (
              <span key={tag} className={TAG_CSS}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
}
