"use client";

import "./globals.css";

// Components
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import localFont from "next/font/local";
import { ThemeProvider } from "@material-tailwind/react";
import { theme } from "@/theme/theme";

const metadata = {
  title: "Codetrain Africa",
  description: "Codetrain",
};

// Load the local font
const helvetica = localFont({
  src: "../fonts/Helvetica.ttf",
});

export default function RootLayout({ children }) {
  return (
    <ThemeProvider value={theme}>
      <html lang="en">
        <body className={helvetica.className}>
          <Nav />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
