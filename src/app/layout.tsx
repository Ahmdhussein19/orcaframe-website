import type { Metadata } from "next";
import { SiteNavbar } from "@/components/layout/SiteNavbar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: "orcaframe",
  description:
    "Orcaframe is an end-to-end data operations layer for industrial, logistics, and asset-heavy businesses.",
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
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <SiteNavbar />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
