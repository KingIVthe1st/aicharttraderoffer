import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Chart Traders Elite Program | Learn Futures Trading from the Developer",
  description: "Master futures trading with 8 private sessions from AI Chart Traders creator Ivanlee Jackson. AI-powered mentorship, prop firm setup, and lifetime platform access. Only 2 spots left.",
  keywords: "futures trading, AI trading, prop firm, trading education, day trading, Apex Trader Funding, trading mentor",
  openGraph: {
    title: "AI Chart Traders Elite Program",
    description: "Learn futures trading from the AI developer who built your 24/7 mentor",
    type: "website",
  },
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
