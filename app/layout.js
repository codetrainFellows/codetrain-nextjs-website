// "use client";

// import "./globals.css";

// // Components
// import Nav from "@/components/Nav";
// import Footer from "@/components/Footer";
// import { GoogleAnalytics } from "@next/third-parties/google";

// import localFont from "next/font/local";
// import { ThemeProvider } from "@material-tailwind/react";
// import { theme } from "@/theme/theme";
// import Script from "next/script";

// const metadata = {
//   title: "Codetrain Africa | Apps coding bootcamp and UI/UX design",
//   description:
//     "Learn fullstack web and mobile apps development from the most holistic coding bootcamp. We have live interactive virtual and in-person options available.",
//   keywords: [
//     "web development",
//     "software development",
//     "software engineer",
//     "ui/ux",
//     "ui/ux designing",
//     "designing",
//     "coding bootcamp",
//     "codetrain",
//     "codetrainafrica",
//     "codetrain africa",
//   ],
// };

// // Load the local font
// const helvetica = localFont({
//   src: "../fonts/Helvetica.ttf",
// });

// export default function RootLayout({ children }) {
//   return (
//     <ThemeProvider value={theme}>
//       <html lang="en">
//         <head>
//           <title>{metadata.title}</title>
//           <meta name="description" content={metadata.description} />
//           <link rel="canonical" href="https://www.codetrainafrica.com/" />


//            {/* Open Graph tags - used by WhatsApp, Facebook, LinkedIn, Telegram, etc. */}
//            <meta property="og:title" content={metadata.title} />
//           <meta property="og:description" content={metadata.description} />
//           <meta property="og:url" content="https://www.codetrainafrica.com/" />
//           <meta property="og:type" content="website" />
//           <meta property="og:image" content="https://www.codetrainafrica.com/people/group.jpg" />
//           <meta property="og:image:width" content="1200" />
//           <meta property="og:image:height" content="630" />
//           <meta property="og:site_name" content="Codetrain Africa" />

//           {/* Twitter Card tags */}
//           <meta name="twitter:card" content="summary_large_image" />
//           <meta name="twitter:title" content={metadata.title} />
//           <meta name="twitter:description" content={metadata.description} />
//           <meta name="twitter:image" content="https://www.codetrainafrica.com/people/group.jpg" />

          
//           <Script
//             async
//             src="https://www.googletagmanager.com/gtag/js?id=AW-714696786"
//           />

//           <Script id="google-ads-tag">
//             {`
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
              
//               // This tracks every page view
//               gtag('config', 'AW-714696786');
//             `}
//           </Script>
//         </head>
//         <body className={helvetica.className}>
//           <Nav />
//           <main className="overflow-hidden">{children}</main>
//           <Footer />
//           <GoogleAnalytics gaId="G-CKDJJBC8DC" />
//         </body>
//       </html>
//     </ThemeProvider>
//   );
// }



import "./globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import localFont from "next/font/local";
import Script from "next/script";
import Providers from "@/components/Providers";

const helvetica = localFont({
  src: "../fonts/Helvetica.ttf",
});

export const metadata = {
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
  openGraph: {
    title: "Codetrain Africa | Apps coding bootcamp and UI/UX design",
    description:
      "Learn fullstack web and mobile apps development from the most holistic coding bootcamp. We have live interactive virtual and in-person options available.",
    url: "https://www.codetrainafrica.com/",
    siteName: "Codetrain Africa",
    images: [
      {
        url: "https://www.codetrainafrica.com/people/group.jpg",
        width: 1200,
        height: 630,
        alt: "Codetrain Africa",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codetrain Africa | Apps coding bootcamp and UI/UX design",
    description:
      "Learn fullstack web and mobile apps development from the most holistic coding bootcamp.",
    images: ["https://www.codetrainafrica.com/people/group.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
            gtag('config', 'AW-714696786');
          `}
        </Script>
      </head>
      <body className={helvetica.className}>
        <Providers>
          <Nav />
          <main className="overflow-hidden">{children}</main>
          <Footer />
        </Providers>
        <GoogleAnalytics gaId="G-CKDJJBC8DC" />
      </body>
    </html>
  );
}