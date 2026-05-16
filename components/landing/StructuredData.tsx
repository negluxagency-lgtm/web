/**
 * Structured Data (JSON-LD) — Schema.org
 * Se inyecta en el <head> de la página principal.
 * Incluye: LocalBusiness, FAQPage, WebSite con SearchAction.
 */

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nelux.es';

/** Schema LocalBusiness — clave para SEO Local y Google Maps */
export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${BASE_URL}/#local-business`,
    "name": "Nelux Webs",
    "description": "Agencia de diseño web para negocios locales de Zaragoza. Creamos webs profesionales desde 200€, con SEO local, hosting y dominio gratis el primer año. Entrega garantizada en 7 días.",
    "url": BASE_URL,
    "telephone": "+34623064127",
    "email": "contacto@nelux.es",
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Transferencia bancaria, Bizum",
    "areaServed": [
        {
            "@type": "City",
            "name": "Zaragoza"
        },
        {
            "@type": "State",
            "name": "Aragón"
        },
        {
            "@type": "Country",
            "name": "España"
        }
    ],
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Zaragoza",
        "addressRegion": "Aragón",
        "addressCountry": "ES"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "41.6488",
        "longitude": "-0.8891"
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "20:00"
    },
    "image": `${BASE_URL}/og-nelux.jpg`,
    "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/favicon-96x96.png`,
        "width": 96,
        "height": 96
    },
    "sameAs": [
        "https://instagram.com/neluxwebs",
        "https://wa.me/34623064127"
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Diseño Web",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Página Web Landing Page",
                    "description": "Diseño web profesional de una sola página, 100% a medida, optimizada para SEO y mobile-first."
                },
                "price": "200",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock"
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Página Web Multi-página",
                    "description": "Web con múltiples páginas, blog, formularios avanzados y funcionalidades personalizadas."
                },
                "price": "350",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock"
            }
        ]
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "30",
        "bestRating": "5",
        "worstRating": "1"
    }
};

/** Schema FAQPage — aparece en Featured Snippets de Google */
export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "¿Cuánto cuesta una página web para mi negocio en Zaragoza?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "La mayoría de negocios locales encajan entre 200€ y 300€. Pago en dos fases: la mitad al empezar y la otra cuando estés conforme. Sin costes ocultos. El dominio (.es o .com) son 30€ al año aparte."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cuánto tarda en estar lista mi página web?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nuestro plazo habitual es 5 días laborables y el máximo 7 días naturales. Nada de esperar semanas o meses como suele pasar con las agencias."
            }
        },
        {
            "@type": "Question",
            "name": "¿Necesito saber de tecnología para contrataros?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Para nada. Tú solo tienes que contarnos qué haces y qué te gusta. Nosotros nos encargamos de todo lo demás: el diseño, la programación y la publicación."
            }
        },
        {
            "@type": "Question",
            "name": "¿Qué pasa si después quiero cambiar algo en mi web?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Lo hacemos sin coste. Si quieres actualizar el horario, cambiar una foto, añadir un servicio o corregir algo, te lo gestionamos en el día. Tu web siempre estará como la quieres."
            }
        },
        {
            "@type": "Question",
            "name": "¿La web incluye SEO para aparecer en Google?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí. Todas nuestras webs incluyen optimización SEO básica: estructura semántica correcta, velocidad de carga optimizada, adaptación a móvil (mobile-first) y configuración para búsquedas locales en Zaragoza."
            }
        },
        {
            "@type": "Question",
            "name": "¿Incluye dominio y hosting?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "El primer año de dominio y hosting son gratis con cualquier proyecto. A partir del segundo año, el coste de renovación es de 30€/año aproximadamente."
            }
        }
    ]
};

/** Schema WebSite con Sitelinks Searchbox */
export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    "name": "Nelux Webs",
    "url": BASE_URL,
    "description": "Agencia de diseño web para negocios locales de Zaragoza",
    "inLanguage": "es-ES",
    "publisher": {
        "@id": `${BASE_URL}/#local-business`
    }
};
