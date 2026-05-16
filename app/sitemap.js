const BASE = "https://siegen-web.de";

export default function sitemap() {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/impressum`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/datenschutz`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
