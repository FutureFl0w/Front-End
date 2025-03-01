import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";
import DesktopOverlay from "./components/DesktopOverlay";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SOMOS",
  description: "Fluye con el futuro",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <PageTransition>{children}</PageTransition>
        <DesktopOverlay />
      </body>
    </html>
  );
}
