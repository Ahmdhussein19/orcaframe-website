import type { Metadata } from "next";
import { HomePage } from "@/components/home/home-page";

export const metadata: Metadata = {
  title: "OrcaFrame",
  description:
    "The data operations layer for asset-heavy businesses. Collect, clean, and surface operational data in live dashboards.",
};

export default function Page() {
  return <HomePage />;
}
