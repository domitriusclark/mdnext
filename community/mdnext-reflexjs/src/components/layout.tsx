import config from '@config';
import { Navbar } from '.';

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer py="12|18|20">
        <div variant="container.sm">
          <div borderTopWidth="1" display="flex" justifyContent="center" pt="6">
            {config.site.copyright ? (
              <p fontSize="sm" color="gray">
                {config.site.copyright}
              </p>
            ) : null}
          </div>
        </div>
      </footer>
    </>
  );
}
