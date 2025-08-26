import { Inter } from "next/font/google";
import ClientThemeProvider from "../components/ClientThemeProvider";
import { AppProvider } from "../context/AppContext";
import { LanguageProvider } from "../context/LanguageContext";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Baby & Brand Name Generator - Islamic, Cultural & Meaningful Names",
  description:
    "Generate beautiful, meaningful names for babies and brands with AI. Support for Islamic, Hindu, Buddhist names and modern brand names.",
  keywords:
    "baby names, brand names, Islamic names, cultural names, name generator, AI names",
  authors: [{ name: "Name Generator AI" }],
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#667eea" />
        {/* Add Google Fonts for better typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ClientThemeProvider>
          <LanguageProvider>
            <AppProvider>
              <div className="app-container">
                <Header />
                <main className="main-content">{children}</main>
                <Footer />
              </div>
            </AppProvider>
          </LanguageProvider>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
