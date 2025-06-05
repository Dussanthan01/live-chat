import { useEffect } from 'react';

function App() {
useEffect(() => {
  if (!document.getElementById('3cx-live-chat-script')) {
    const script = document.createElement('script');
    script.src = 'http://localhost:5000/3cx-script';
    script.async = true;
    script.id = '3cx-live-chat-script';

    script.onload = () => {
      // After the script is loaded, add the <call-us-selector> element
      const callUs = document.createElement('call-us-selector');
      callUs.setAttribute('phonesystem-url', 'https://1100.3cx.cloud');
      callUs.setAttribute('party', 'dustech');
      document.body.appendChild(callUs);
    };

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
