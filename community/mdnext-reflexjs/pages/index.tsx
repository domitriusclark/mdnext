import { NextSeo } from 'next-seo';
import { Layout, MiniCard } from '@components';
import { Grid } from 'reflexjs';

export default function HomePage() {
  return (
    <Layout>
      <NextSeo
        title="Build stunning websites"
        description="Blast off with the speed of Nextjs, the power of MDX and the
        best-in-class developer experience of Reflexjs."
      />
      <section py="10|18">
        <div variant="container">
          <div textAlign="center">
            <h1 variant="heading.h1">Build stunning websites</h1>
            <p variant="text.lead" maxW="800" mx="auto" mt="4">
              Blast off with the speed of Nextjs, the power of MDX and the
              best-in-class developer experience of Reflexjs.
            </p>
            <div display="inline-grid" col="2" gap="4" mt="6">
              <a href="/" variant="button.primary.lg">
                Get Started
              </a>
              <a
                href="https://github.com/domitriusclark/mdnext"
                variant="button.muted.lg"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
      <section py="10|18">
        <div variant="container.sm">
          <h2 variant="heading.h2" fontSize="3xl|4xl|5xl" textAlign="center">
            Packed with features
          </h2>
          <p variant="text.lead" textAlign="center">
            Everything you expect and more.
          </p>
          <Grid col="1|2" gap="6|8|10" mt="10">
            <MiniCard
              icon="swatch"
              iconColor="#fca311"
              heading="Customize everything"
              text="Personalize your theme’s colors, typography...etc"
            />
            <MiniCard
              icon="users"
              iconColor="#22cc88"
              heading="Fully Accessible"
              text="Compliant with WAI-ARIA"
            />
            <MiniCard
              icon="moon"
              iconColor="#ee6c4d"
              heading="Dark mode"
              text="Optimized for light and dark modes."
            />
            <MiniCard
              icon="code"
              iconColor="#34bbff"
              heading="Code blocks"
              text="With line highlighting, title and line numbers"
            />
            <MiniCard
              icon="search"
              iconColor="#8855ff"
              heading="Built-in Search"
              text="Powerful and lightweight fuzzy search"
            />
            <MiniCard
              icon="chart"
              iconColor="#fb559a"
              heading="SEO"
              text="With meta tags and open graph support"
            />
          </Grid>
        </div>
      </section>
    </Layout>
  );
}
