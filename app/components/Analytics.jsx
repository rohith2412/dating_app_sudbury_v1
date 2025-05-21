"use client"
// components/Analytics.js
import { useEffect } from 'react';
import { Cookies } from 'react-cookie-consent';

const Analytics = () => {
  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (consent === 'true') {
      // Load analytics script
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-MX6MG6ERQ4';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'YOUR_TRACKING_ID');
      };
    }
  }, []);

  return null;
};

export default Analytics;
