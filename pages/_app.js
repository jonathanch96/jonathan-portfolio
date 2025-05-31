import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Google Analytics tracking
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// Google Analytics functions
const gtag = (...args) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args)
  }
}

const pageview = (url) => {
  if (GA_TRACKING_ID) {
    gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

const event = ({ action, category, label, value }) => {
  if (GA_TRACKING_ID) {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Track page views
    const handleRouteChange = (url) => {
      pageview(url)
    }
    
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    // Track performance metrics
    if (typeof window !== 'undefined' && 'performance' in window && GA_TRACKING_ID) {
      // Core Web Vitals tracking
      const trackWebVitals = ({ name, delta, value, id }) => {
        gtag('event', name, {
          event_category: 'Web Vitals',
          event_label: id,
          value: Math.round(name === 'CLS' ? delta * 1000 : delta),
          non_interaction: true,
        })
      }

      // Dynamic import for web-vitals to avoid SSR issues
      const loadWebVitals = async () => {
        try {
          const { getCLS, getFID, getLCP, getFCP, getTTFB } = await import('web-vitals')
          getCLS(trackWebVitals)
          getFID(trackWebVitals)
          getLCP(trackWebVitals)
          getFCP(trackWebVitals)
          getTTFB(trackWebVitals)
        } catch (error) {
          console.log('Web Vitals not available')
        }
      }

      loadWebVitals()
    }
  }, [])

  return (
    <>
      {/* Google Analytics */}
      {GA_TRACKING_ID && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                  custom_map: {
                    'custom_parameter_1': 'portfolio_section'
                  }
                });
              `,
            }}
          />
        </>
      )}
      
      {/* Main App */}
      <Component {...pageProps} />
    </>
  )
}

// Export analytics functions for use in components
export { gtag, pageview, event }
