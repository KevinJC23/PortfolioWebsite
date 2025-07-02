import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; 
import { ThemeProvider } from './context/ThemeContext';
import { FloatingChatButton } from './components/FloatingChatButton/FloatingChatButton';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kevin Juan Carlos - Portfolio Website",
  description: "Created by Kevin Juan Carlos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ `${inter.variable} antialiased bg-gray-50 transition-colors dark:bg-gray-900 dark:text-white` }>
        <ThemeProvider>
          <main className="h-full">
            { children }
          </main>
          <FloatingChatButton />
        </ThemeProvider>
      </body>
    </html>
  );
}