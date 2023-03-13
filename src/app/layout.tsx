import '../../styles/globals.css';
import { Josefin_Sans, IBM_Plex_Mono, DM_Sans } from 'next/font/google';

const josefinSans = Josefin_Sans({
  weight: ['700'],
  variable: '--font-josefin-sans',
  display: 'swap',
  subsets: ['latin'],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  subsets: ['latin'],
});

const dmSans = DM_Sans({
  weight: ['500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${josefinSans.variable} ${ibmPlexMono.variable} ${dmSans.variable}`}
    >
      <body className="bg-[#0E091B]">{children}</body>
    </html>
  );
}
