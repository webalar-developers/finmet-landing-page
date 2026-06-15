import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";

const switzer = localFont({
  src: [
    {
      path: "./fonts/Switzer-Variable.woff2",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-switzer",
  display: "swap",
  weight: "100 900",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "Finmet — Smart Financial Tools",
    template: "%s | Finmet",
  },
  description:
    "Finmet helps you manage, track, and grow your finances with intelligent tools built for modern investors.",
  keywords: ["finance", "fintech", "investment", "portfolio", "wealth"],
  authors: [{ name: "Webalar", url: "https://webalar.in" }],
  creator: "Webalar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Finmet",
    title: "Finmet — Smart Financial Tools",
    description:
      "Finmet helps you manage, track, and grow your finances with intelligent tools built for modern investors.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finmet — Smart Financial Tools",
    description:
      "Finmet helps you manage, track, and grow your finances with intelligent tools built for modern investors.",
    creator: "@webalar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${switzer.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
