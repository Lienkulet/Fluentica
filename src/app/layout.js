import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { NavMenuProvider } from "@/context/NavMenuContext";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fluentica | Școală de Limbă Engleză – Cursuri Online și Offline",
  description: "Fluentica — școală de limbă engleză din Moldova. Cursuri de engleză pentru copii, adolescenți și adulți, online și offline. Lecții individuale, pregătire Cambridge și Business English.",
  keywords: [
    "scoala de limba engleza",
    "cursuri engleza moldova",
    "cursuri engleza chisinau",
    "engleza copii",
    "engleza adolescenti",
    "engleza adulti",
    "pregatire cambridge",
    "business english",
    "lectii engleza online",
    "fluentica",
  ],
  authors: [{ name: "Fluentica" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Fluentica | Școală de Limbă Engleză",
    description: "Cursuri de engleză pentru copii, adolescenți și adulți. Online și offline, lecții individuale și pregătire Cambridge.",
    url: "https://fluentica.md",
    siteName: "Fluentica",
    locale: "ro_MD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fluentica | Școală de Limbă Engleză",
    description: "Cursuri de engleză pentru copii, adolescenți și adulți. Online și offline, lecții individuale și pregătire Cambridge.",
  },
  metadataBase: new URL("https://fluentica.md"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": "https://fluentica.md/#organization",
      name: "Fluentica",
      description: "Școală de limbă engleză din Moldova. Cursuri de engleză pentru copii, adolescenți și adulți, online și offline.",
      url: "https://fluentica.md",
      telephone: "+37369634884",
      email: "fluenticaenglish@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "str. Gavriil-Bănulescu Bodoni 59",
        addressLocality: "Chișinău",
        addressCountry: "MD",
      },
      sameAs: [
        "https://instagram.com/fluentica.md",
        "https://facebook.com/fluentica.md",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cursuri de Engleză",
        itemListElement: [
          { "@type": "Course", name: "Engleză pentru Copii", description: "Lecții interactive adaptate vârstei, care dezvoltă vocabularul, pronunția și încrederea copilului." },
          { "@type": "Course", name: "Engleză pentru Adolescenți", description: "Cursuri dinamice pentru școală, examene și viitor. Accent pe conversație, pregătire pentru teste internaționale." },
          { "@type": "Course", name: "Engleză pentru Maturi", description: "Programe flexibile pentru carieră, călătorii sau dezvoltare personală." },
          { "@type": "Course", name: "Engleză Individuală", description: "Lecții unu-la-unu, adaptate nevoilor tale." },
          { "@type": "Course", name: "Pregătire Cambridge", description: "Pregătire structurată pentru examenele Cambridge." },
          { "@type": "Course", name: "B2B English", description: "Cursuri de Business English personalizate pentru echipe și companii." },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://fluentica.md/#website",
      url: "https://fluentica.md",
      name: "Fluentica",
      publisher: { "@id": "https://fluentica.md/#organization" },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ro"
      className={`${urbanist.variable} h-full antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NavMenuProvider>
          <Navbar />
          {children}
          <Footer />
        </NavMenuProvider>
      </body>
    </html>
  );
}
