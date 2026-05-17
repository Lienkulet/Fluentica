export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://fluentica.md/sitemap.xml",
  };
}
