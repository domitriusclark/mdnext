import tw, { css } from 'twin.macro';

export default function Index() {
  return (
    <div
      css={[
        css`
          color: #000;
          padding: 24px 0;
        `,
      ]}
    >
      <h1 tw="text-4xl font-bold text-center mb-5">
        Welcome to MDNEXT + twin.macro{' '}
      </h1>
      <p tw="text-center mb-5">
        This template is configured to use{' '}
        <a
          href="https://github.com/ben-rogerson/twin.macro"
          tw="text-blue-800 underline font-semibold hover:text-blue-500"
        >
          twin.macro
        </a>{' '}
        with the{' '}
        <a
          href="https://emotion.sh/docs/introduction"
          tw="text-blue-800 underline font-semibold hover:text-blue-500"
        >
          Emotion
        </a>{' '}
        preset for stying.
      </p>
      <p tw="text-center mb-5">
        Add any{' '}
        <a
          href="https://tailwindcss.com/"
          tw="text-blue-800 underline font-semibold hover:text-blue-500"
        >
          Tailwind CSS
        </a>{' '}
        class to an element by using the{' '}
        <span tw="text-orange-500 font-semibold">tw</span> prop.
      </p>
      <p tw="text-center mb-5">
        Add any extra, one-off CSS you'd like to an element using{' '}
        <a
          href="https://emotion.sh/docs/css-prop"
          tw="text-blue-800 underline font-semibold hover:text-blue-500"
        >
          Emotion's css prop
        </a>
      </p>
      <p tw="text-center mb-5">
        Because twin.macro compiles tailwind classes at build time, there's no
        need to set up a Purge CSS step! Your project will only ship the
        tailwind classes that you actually use. 🚀
      </p>
    </div>
  );
}
