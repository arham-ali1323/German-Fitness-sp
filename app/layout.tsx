import type { Metadata } from "next";
import { Orbitron, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/session-provider";
import { ActiveThemeProvider } from "@/components/dashboard/active-theme";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";


export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "German Fitness - Complete Gym Management System",
  description: "Professional gym management system with member tracking, class scheduling, and payment processing",
  themeColor: "#000000",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.png", sizes: "256x256", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/favicon.png", sizes: "57x57", type: "image/png" },
      { url: "/favicon.png", sizes: "60x60", type: "image/png" },
      { url: "/favicon.png", sizes: "72x72", type: "image/png" },
      { url: "/favicon.png", sizes: "76x76", type: "image/png" },
      { url: "/favicon.png", sizes: "114x114", type: "image/png" },
      { url: "/favicon.png", sizes: "120x120", type: "image/png" },
      { url: "/favicon.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon.png", sizes: "152x152", type: "image/png" },
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} ${orbitron.variable} antialiased`}
        suppressHydrationWarning
      >
        <ActiveThemeProvider>
          <Providers>
            <Navbar />
            <main>
              {children}
            </main>
            <Footer />
          </Providers>
        </ActiveThemeProvider>
      </body>
    </html>
  );
}
