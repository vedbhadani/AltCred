'use client';

import './globals.css';
import DottedBackground from '@/components/DottedBackground';
import CustomCursor from '@/components/CustomCursor';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dots-animated" style={{ cursor: 'none' }}>
        <DottedBackground />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}