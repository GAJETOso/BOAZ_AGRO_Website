import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "BOAZ AGRO LIMITED — From Soil to Summit",
  description:
    "BOAZ AGRO LIMITED is a fully integrated agricultural enterprise driving food security, rural development, and global commodity export.",
  // Staging deployments set SITE_ENV=staging so search engines skip them.
  ...(process.env.SITE_ENV === "staging" && { robots: { index: false, follow: false } }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://komvia-ai-os.vercel.app/js/embed.js"
          data-project="boaz-agro"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
