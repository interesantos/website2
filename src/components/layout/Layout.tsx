import { use } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: string } | Promise<{ lang: string }>
}) {
  const resolvedParams = 'then' in params ? use(params) : params;
  return (
    <>
      <Header params={resolvedParams} />
      <main className="min-h-[calc(100vh-160px)]">
        {children}
      </main>
      <Footer />
    </>
  );
}
