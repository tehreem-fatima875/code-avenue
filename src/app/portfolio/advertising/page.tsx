import type { Metadata } from "next";
import PortfolioPages from "@/components/sections/PortfolioPages";

export const metadata: Metadata = {
  title: "Advertising Portfolio",
  description: "Discover the brands Code Avenue supports through advertising and digital marketing.",
};

export default function AdvertisingPortfolioPage() {
  return <PortfolioPages type="advertising" />;
}
