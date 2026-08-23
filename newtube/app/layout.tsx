import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'


const inter =Inter({
  subsets: ["latin"]
});


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ClerkProvider>
        <html
          lang="en"
          className={inter.className}
        >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </ClerkProvider>
  );
}
