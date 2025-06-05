// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/3cx-script', async (req, res) => {
  try {
    const response = await fetch('https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js');

    if (!response.ok) {
      console.error('3CX fetch failed:', response.status, response.statusText);
      return res.status(502).send('Failed to fetch 3CX script.');
    }

    const script = await response.text();
    res.set('Content-Type', 'application/javascript');
    res.send(script);
  } catch (err) {
    console.error('Server crashed:', err);
    res.status(500).send('Internal Server Error.');
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
