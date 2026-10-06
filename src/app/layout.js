import { Geist, Geist_Mono } from "next/font/google";
import Dither from "@/components/Dither";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionBlur from "@/components/MotionBlur";
import { profile } from "@/content/site";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata = {
  title: { default: profile.name, template: `%s — ${profile.name}` },
  description: profile.intro,
};

// This script runs before the first paint. Thus the page does not show the wrong theme first.
// data-theme is the choice of the visitor. The dark class is the theme that shows.
const themeScript = `
  let theme = null;
  try { theme = localStorage.getItem("theme"); } catch {}
  if (theme !== "light" && theme !== "dark") theme = "system";
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.toggle(
    "dark",
    theme === "dark" || (theme === "system" && matchMedia("(prefers-color-scheme: dark)").matches),
  );
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans text-base leading-6">
        <MotionBlur>
          <div className="mx-auto max-w-[640px] px-6 pt-12 pb-16 sm:pt-16">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </MotionBlur>
        <Dither />
      </body>
    </html>
  );
}
