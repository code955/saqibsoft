import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono, Sora } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const ibmPlex = IBM_Plex_Sans({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saqibsoft.dev"),
  title: {
    default: "Saqib Soft — Full-Stack Developer",
    template: "%s · Saqib Soft",
  },
  description:
    "Saqib Soft builds production web apps and AI-powered products for remote clients across the UK, US, EU, and beyond.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/profile.png",
  },
  openGraph: {
    title: "Saqib Soft — Full-Stack Developer",
    description:
      "Software that looks finished and works in production. Remote collaboration from Pakistan for UK, US, and global teams.",
    type: "website",
    images: ["/profile.png"],
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('saqibsoft-theme');
    var theme = stored === 'dark' || stored === 'light'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${ibmPlex.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <noscript>
          <style>{`.reveal, .split-word, .split-word * { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <ScrollReveal />
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
