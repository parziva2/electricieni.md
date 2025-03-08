import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: 'Electricieni.md',
  description: 'Professional electrical services in Moldova',
};

// This is the root layout - we don't render html/body here to avoid nesting issues
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
