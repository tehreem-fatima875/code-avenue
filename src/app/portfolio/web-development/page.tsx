import type { Metadata } from "next";
import PortfolioPages from "@/components/sections/PortfolioPages";

export const metadata: Metadata = {
  title: "Web Development Portfolio",
  description: "Explore Code Avenue's selected websites, e-commerce projects, and digital products.",
};

export default function WebDevelopmentPortfolioPage() {
  return <PortfolioPages type="web" />;
}
