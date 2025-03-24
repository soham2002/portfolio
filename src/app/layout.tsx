import type { Metadata } from "next";
import "./globals.css";
import { Providers } from './providers'

export const metadata: Metadata = {
  title: "Soham's Portfolio",
  description: "Portfolio of Soham Banerjee",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
