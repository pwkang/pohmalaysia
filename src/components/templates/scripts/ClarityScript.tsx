import React from 'react';
import Script from 'next/script';
import { __PROD__ } from '@/lib/utils';

function ClarityScript() {
  if (!__PROD__) return null;

  return (
    <Script id="clarity-script" strategy="lazyOnload">
      {`
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "o8753pbo7z");
      `}
    </Script>
  );
}

export default ClarityScript;
