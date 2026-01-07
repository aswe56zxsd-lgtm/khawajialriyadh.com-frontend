import './globals.css';

export const metadata = {
  metadataBase: new URL('https://qahwajialriyad.com'),
  title: {
    default: 'قهوجي الرياض | قهوجيين وصبابين محترفين للحفلات والمناسبات',
    template: '%s | قهوجي الرياض',
  },
  description: 'قهوجي الرياض - أفضل خدمات قهوجيين وصبابين قهوة في الرياض. نقدم ضيافة عربية فاخرة للحفلات والمناسبات والأعراس. قهوة عربية أصيلة، شاي، كرك، تمور. خدمة 24 ساعة. اتصل الآن!',
  keywords: [
    'قهوجي الرياض',
    'قهوجيين الرياض',
    'صبابين قهوة الرياض',
    'قهوجي حفلات',
    'صباب قهوة',
    'قهوجيين وصبابين',
    'خدمات ضيافة الرياض',
    'قهوة عربية',
    'ضيافة عربية',
    'قهوجي أعراس',
    'صبابين حفلات',
    'قهوجي مناسبات',
    'أفضل قهوجي بالرياض',
    'قهوجيات الرياض',
    'صبابات قهوة',
    'مباشرين قهوة',
    'قهوجي وصباب',
    'ضيافة سعودية',
    'قهوجي محترف',
    'صباب ماهر'
  ],
  authors: [{ name: 'قهوجي الرياض' }],
  creator: 'قهوجي الرياض',
  publisher: 'قهوجي الرياض',
  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: false,
  },
  alternates: {
    canonical: 'https://qahwajialriyad.com',
  },
  openGraph: {
    title: 'قهوجي الرياض | قهوجيين وصبابين محترفين للحفلات والمناسبات',
    description: 'أفضل خدمات قهوجيين وصبابين قهوة في الرياض. ضيافة عربية فاخرة للحفلات والمناسبات. قهوة عربية، شاي، كرك، تمور. خدمة 24 ساعة.',
    url: 'https://qahwajialriyad.com',
    siteName: 'قهوجي الرياض',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/images/1.webp',
        width: 1200,
        height: 630,
        alt: 'قهوجي الرياض - قهوجيين وصبابين محترفين',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'قهوجي الرياض | قهوجيين وصبابين محترفين',
    description: 'أفضل خدمات قهوجيين وصبابين قهوة في الرياض. ضيافة عربية فاخرة للحفلات والمناسبات.',
    images: ['/images/1.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#2D1B0B',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://qahwajialriyad.com/#business",
        "name": "قهوجي الرياض",
        "alternateName": ["قهوجيين وصبابين الرياض", "صبابين قهوة الرياض", "قهوجي حفلات"],
        "description": "قهوجي الرياض - أفضل خدمات قهوجيين وصبابين قهوة في الرياض. نقدم ضيافة عربية فاخرة للحفلات والمناسبات والأعراس.",
        "url": "https://qahwajialriyad.com",
        "telephone": "+966503521344",
        "priceRange": "$$",
        "image": "https://qahwajialriyad.com/images/1.webp",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "طريق الملك فهد، حي العليا",
          "addressLocality": "الرياض",
          "addressRegion": "الرياض",
          "postalCode": "12211",
          "addressCountry": "SA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "24.7136",
          "longitude": "46.6753"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        "areaServed": [
          { "@type": "City", "name": "الرياض" },
          { "@type": "AdministrativeArea", "name": "منطقة الرياض" }
        ],
        "sameAs": [
          "https://wa.me/966503521344"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "120",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://qahwajialriyad.com/#website",
        "url": "https://qahwajialriyad.com",
        "name": "قهوجي الرياض",
        "description": "قهوجي الرياض - خدمات قهوجيين وصبابين محترفين للحفلات والمناسبات",
        "inLanguage": "ar-SA",
        "publisher": {
          "@id": "https://qahwajialriyad.com/#business"
        }
      },
      {
        "@type": "Service",
        "@id": "https://qahwajialriyad.com/#service",
        "name": "خدمات قهوجي الرياض",
        "serviceType": ["خدمات ضيافة", "قهوجيين", "صبابين قهوة"],
        "provider": {
          "@id": "https://qahwajialriyad.com/#business"
        },
        "areaServed": {
          "@type": "City",
          "name": "الرياض"
        },
        "description": "قهوجي وصبابين محترفين - قهوة عربية أصيلة - شاي وكرك - ضيافة التمور والحلويات - خدمة حفلات ومناسبات",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "areaServed": "الرياض"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "ما هي خدمات قهوجي الرياض؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نقدم خدمات قهوجيين وصبابين محترفين للحفلات والمناسبات، تشمل القهوة العربية الأصيلة، الشاي بأنواعه، الكرك، والتمور الفاخرة."
            }
          },
          {
            "@type": "Question",
            "name": "هل تقدمون خدمة قهوجيات للمناسبات النسائية؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم، نوفر فريق من الصبابات المحترفات للمناسبات النسائية مع الالتزام بالزي الموحد الساتر والأنيق."
            }
          },
          {
            "@type": "Question",
            "name": "كيف يمكنني حجز خدمة قهوجي؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "يمكنك الحجز عبر الواتساب أو الاتصال المباشر. خدمتنا متوفرة 24 ساعة طوال أيام الأسبوع."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="ar" dir="rtl" className="light scroll-smooth">
      <head>
        <meta name="google-site-verification" content="uLqsJZ3F95JiuJ_ddjhP3yJmnop_UfxweO4CApikyaI" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background-light text-secondary font-sans antialiased selection:bg-primary selection:text-white scroll-smooth relative">
        {children}
      </body>
    </html>
  );
}
