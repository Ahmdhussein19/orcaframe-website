import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteNavbar } from "@/components/layout/SiteNavbar";
import { cn } from "@/lib/utils";
import "./globals.css";

const redditSans = localFont({
  src: [
    {
      path: "../fonts/redditsans/RedditSans-Light-BF651644f1468a3.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/redditsans/RedditSans-LightItalic-BF651644f147a8e.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/redditsans/RedditSans-Regular-BF651644f15ecc6.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/redditsans/RedditSans-Italic-BF651644f130a21.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/redditsans/RedditSans-SemiBold-BF651644f15970f.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/redditsans/RedditSans-SemiBoldItalic-BF651644f1039d8.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/redditsans/RedditSans-Bold-BF651644f1565f0.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/redditsans/RedditSans-BoldItalic-BF651644f13a41d.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/redditsans/RedditSans-ExtraBold-BF651644f15f24a.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/redditsans/RedditSans-ExtraBoldItalic-BF651644f14d91d.ttf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OrcaFrame",
    template: "%s · OrcaFrame",
  },
  description:
    "OrcaFrame is an end-to-end data operations layer for industrial, logistics, and asset-heavy businesses.",
  icons: {
    icon: "/Orcaframe Logo-white-rec.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(redditSans.variable, "font-sans")}
    >
      <body className="min-h-screen font-sans antialiased">
        <SiteNavbar />
        {children}
      </body>
    </html>
  );
}
