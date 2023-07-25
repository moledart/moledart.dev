import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "./my-font.woff2",
  display: "swap",
});
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "REW",
  description: "frontend developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${myFont.className} grid text-lg uppercase`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="w-full max-w-3xl mx-auto">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
