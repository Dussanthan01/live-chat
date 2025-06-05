import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Avoid injecting the script multiple times
    if (!document.getElementById('tcx-callus-js')) {
      const script = document.createElement('script');
      script.src = 'https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js';
      script.defer = true;
      script.id = 'tcx-callus-js';
      script.charset = 'utf-8';
      document.body.appendChild(script);
    }

    // Inject the <call-us-selector> tag
    if (!document.querySelector('call-us-selector')) {
      const callUsSelector = document.createElement('call-us-selector');
      callUsSelector.setAttribute('phonesystem-url', 'https://1100.3cx.cloud');
      callUsSelector.setAttribute('party', 'dustech');
      document.body.appendChild(callUsSelector);
    }
  }, []);

  return (
    <div>
      <h1>3CX Chat with Real-Time Updates</h1>
    </div>
  );
}

export default App;
