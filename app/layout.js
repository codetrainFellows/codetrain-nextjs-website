import "./globals.css";

// Components
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Codetrain Africa",
  description: "Codetrain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
