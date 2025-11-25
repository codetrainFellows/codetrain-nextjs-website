"use client";

import "./globals.css";

// Components
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

import localFont from "next/font/local";
import { ThemeProvider } from "@material-tailwind/react";
import { theme } from "@/theme/theme";
import Script from "next/script";

const metadata = {
  title: "Codetrain Africa | Apps coding bootcamp and UI/UX design",
  description:
    "Learn fullstack web and mobile apps development from the most holistic coding bootcamp. We have live interactive virtual and in-person options available.",
  keywords: [
    "web development",
    "software development",
    "software engineer",
    "ui/ux",
    "ui/ux designing",
    "designing",
    "coding bootcamp",
    "codetrain",
    "codetrainafrica",
    "codetrain africa",
  ],
};

// Load the local font
const helvetica = localFont({
  src: "../fonts/Helvetica.ttf",
});

export default function RootLayout({ children }) {
  return (
    <ThemeProvider value={theme}>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link rel="canonical" href="https://www.codetrainafrica.com/" />
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-714696786"
          />

          <Script id="google-ads-tag">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // This tracks every page view
              gtag('config', 'AW-714696786');
            `}
          </Script>
        </head>
        <body className={helvetica.className}>
          <Nav />
          <main className="overflow-hidden">{children}</main>
          <Footer />
          <GoogleAnalytics gaId="G-CKDJJBC8DC" />
        </body>
      </html>
    </ThemeProvider>
  );
}
