const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Endpoint برای پردازش درخواست‌ها
app.post('/api/agent', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // اینجا می‌توانید اتصال به APIهای AI (مثل شماLM، OpenAI، یا سرویس‌های دیگر) اضافه کنید
    // مثال: const response = await axios.post('https://api.you.com/v1/answer', { query: prompt });
    
    res.json({ 
      status: 'success', 
      response: 'درخواست پردازش شد. کد اتصال به API AI را اینجا قرار دهید.' 
    });
  } catch (error) {
    res.status(500).json({ error: 'Processing failed' });
  }
});

// Keep-Alive endpoint (برای جلوگیری از بسته شدن توسط IIS)
app.get('/ping', (req, res) => {
  res.json({ status: 'alive', timestamp: Date.now() });
});

app.listen(port, () => {
  console.log(`Hermes Agent running on port ${port}`);
});
