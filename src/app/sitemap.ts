
import type { MetadataRoute } from "next";

const baseUrl = "https://codeavenuepk.com";

const routes = [
  "",
  "/services/business-websites",
  "/services/e-commerce",
  "/services/google-ads",
  "/services/landing-pages",
  "/services/meta-ads",
  "/services/web-development",
  "/services/wordpress",
  "/blog",
  "/blog/choose-the-right-website",
  "/blog/effective-ecommerce-website",
  "/blog/google-ads-beginners-guide",
  "/blog/landing-page-mistakes",
  "/blog/meta-ads-vs-google-ads",
  "/blog/why-your-business-needs-a-website",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route.startsWith("/services/")
          ? 0.8
          : route === "/blog"
            ? 0.7
            : 0.6,
  }));
}
