"use client"
// components/CookieConsentBanner.jsx
import React, { useEffect, useState } from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';

const CookieConsentBanner = () => {
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (consent === 'true') {
      setIsConsentGiven(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie-consent', 'true', { expires: 365 });
    setIsConsentGiven(true);
  };

  const handleDecline = () => {
    Cookies.set('cookie-consent', 'false', { expires: 365 });
    setIsConsentGiven(false);
  };

  return (
    <div className=''>
      <CookieConsent  
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="cookie-consent"
      style={{ background: ''  }}
      buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
      declineButtonStyle={{ color: '#fff', background: '#c0392b', fontSize: '13px' }}
      expires={365}
      onAccept={handleAccept}
      onDecline={handleDecline}
    >
      We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
    </CookieConsent>
    </div>
  );
};

export default CookieConsentBanner;
