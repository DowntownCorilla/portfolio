import type { Metadata } from "next";
import {
  GITHUB_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Corilla",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "이윤재", url: SITE_URL }],
  creator: "이윤재 (Corilla)",
  publisher: "이윤재 (Corilla)",
  category: "portfolio",
  keywords: [
    "Corilla",
    "corilla",
    "코릴라",
    "이윤재",
    "보안 엔지니어",
    "보안엔지니어",
    "웹 개발자",
    "웹개발자",
    "Security Engineer",
    "Web Developer",
    "DevSecOps",
    "SAST",
    "SCA",
    "DAST",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/Corilla.png", type: "image/png", sizes: "400x400" }],
    shortcut: ["/Corilla.png"],
    apple: [{ url: "/Corilla.png", type: "image/png", sizes: "400x400" }],
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/Corilla.png",
        width: 400,
        height: 400,
        alt: "Corilla 보안 엔지니어·웹 개발자 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/Corilla.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "이윤재",
      alternateName: ["Corilla", "코릴라"],
      url: SITE_URL,
      image: `${SITE_URL}/Corilla.png`,
      jobTitle: ["보안 엔지니어", "웹 개발자"],
      sameAs: [GITHUB_URL],
      knowsAbout: [
        "Security Engineering",
        "Web Development",
        "DevSecOps",
        "SAST",
        "SCA",
        "DAST",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: ["Corilla Portfolio", "코릴라 포트폴리오"],
      description: SITE_DESCRIPTION,
      inLanguage: "ko-KR",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
