import "./globals.css";

// Components
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import localFont from "next/font/local";

export const metadata = {
  title: "Codetrain Africa",
  description: "Codetrain",
};

const helvitica = localFont({
  src: "../fonts/Helvetica.ttf",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={helvitica.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
