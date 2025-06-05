import { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (!document.querySelector('call-us-selector')) {
      const chatWidget = document.createElement('call-us-selector');
      chatWidget.setAttribute('phonesystem-url', 'https://1100.3cx.cloud');
      chatWidget.setAttribute('party', 'dustech'); // ✅ Use your correct widget ID
      document.body.appendChild(chatWidget);
    }

    if (!document.getElementById('3cx-live-chat-script')) {
      const script = document.createElement('script');
      script.id = '3cx-live-chat-script';
      script.defer = true;
      script.src = 'https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <h1>3CX Chat with Real-Time Updates</h1>
    </div>
  );
}

export default App;
