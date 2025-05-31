import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Jonathan Chang" />
        <meta name="copyright" content="Jonathan Chang" />
        
        {/* SEO Meta Tags */}
        <meta name="title" content="Jonathan Chang - Software Engineer & Full-Stack Developer | Jakarta, Indonesia" />
        <meta name="description" content="Experienced Software Engineer with 6+ years expertise in Go, Ruby on Rails, Laravel, React, Next.js. Specialized in healthcare, fintech, telco solutions. Available for blockchain opportunities." />
        <meta name="keywords" content="Jonathan Chang, Software Engineer, Full Stack Developer, Go Golang, Ruby on Rails, Laravel, React, Next.js, Jakarta Indonesia, Blockchain Developer, DevOps, Kubernetes, Docker, Alodokter, Hyperscal, Software Development, Web Development, Backend Developer, Frontend Developer" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jonathan-chang.dev/" />
        <meta property="og:title" content="Jonathan Chang - Software Engineer & Full-Stack Developer" />
        <meta property="og:description" content="Experienced Software Engineer with 6+ years expertise in Go, Ruby on Rails, Laravel, React, Next.js. Building scalable applications across healthcare, fintech, and telecommunications." />
        <meta property="og:image" content="https://jonathan-chang.dev/og-image.jpg" />
        <meta property="og:image:alt" content="Jonathan Chang - Software Engineer Portfolio" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Jonathan Chang Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://jonathan-chang.dev/" />
        <meta name="twitter:title" content="Jonathan Chang - Software Engineer & Full-Stack Developer" />
        <meta name="twitter:description" content="Experienced Software Engineer with 6+ years expertise in Go, Ruby on Rails, Laravel, React, Next.js. Building scalable applications across healthcare, fintech, and telecommunications." />
        <meta name="twitter:image" content="https://jonathan-chang.dev/og-image.jpg" />
        <meta name="twitter:image:alt" content="Jonathan Chang - Software Engineer Portfolio" />
        <meta name="twitter:creator" content="@jonathanch96" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://jonathan-chang.dev/" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3B82F6" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jonathan Chang",
              "jobTitle": "Software Engineer",
              "description": "Experienced Software Engineer with 6+ years expertise in full-stack development",
              "url": "https://jonathan-chang.dev",
              "email": "jonathanchang96@gmail.com",
              "image": "https://jonathan-chang.dev/jonathan-chang-photo.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jakarta",
                "addressCountry": "Indonesia"
              },
              "sameAs": [
                "https://github.com/jonathanch96",
                "https://www.linkedin.com/in/jonathan-chang-25901910b/",
                "https://www.upwork.com/freelancers/~01661e7ba037134fe4"
              ],
              "knowsAbout": [
                "Software Engineering",
                "Full Stack Development",
                "Go (Golang)",
                "Ruby on Rails",
                "Laravel",
                "React",
                "Next.js",
                "DevOps",
                "Kubernetes",
                "Docker",
                "Blockchain Development"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Universitas Bina Nusantara"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "Hyperscal, PT SOD TECHNOLOGY INDONESIA"
              }
            })
          }}
        />
        
        {/* Portfolio/Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Jonathan Chang Portfolio",
              "description": "Portfolio website of Jonathan Chang, Software Engineer and Full-Stack Developer",
              "url": "https://jonathan-chang.dev",
              "author": {
                "@type": "Person",
                "name": "Jonathan Chang"
              },
              "inLanguage": "en-US",
              "copyrightYear": "2024",
              "genre": "Portfolio"
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
