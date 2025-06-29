import '@/styles/globals.scss';
import { ReactNode } from 'react';
import Providers from './providers';

export const metadata = {
  title: 'Auth | Dashboard Demo',
  description: 'Simple auth flow with Next 15',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}