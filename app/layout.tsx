import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NODE_ENV === 'production'
  ? 'https://offer.aicharttraders.com'
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: "AI Chart Traders Elite Program | Learn Futures Trading from the Developer",
  description: "Master futures trading with 8 private sessions from AI Chart Traders creator Ivanlee Jackson. AI-powered mentorship, prop firm setup, and lifetime platform access. Only 2 spots left.",
  keywords: "futures trading, AI trading, prop firm, trading education, day trading, Apex Trader Funding, trading mentor",
  openGraph: {
    title: "AI Chart Traders Elite Program",
    description: "Learn futures trading from the AI developer who built your 24/7 mentor",
    type: "website",
    url: siteUrl,
    siteName: "AI Chart Traders Elite",
    images: [
      {
        url: `${siteUrl}/sharecard.jpg`,
        width: 1200,
        height: 630,
        alt: "AI Chart Traders Elite Program - Master Futures Trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chart Traders Elite Program",
    description: "Learn futures trading from the AI developer who built your 24/7 mentor",
    images: [`${siteUrl}/sharecard.jpg`],
    creator: "@KingIVthe1st",
  },
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
