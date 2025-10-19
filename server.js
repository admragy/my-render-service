const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('🎉 الخدمة شغالة على Render! جاهزة لاستقبال طلبات n8n');
});

app.post('/api/n8n', (req, res) => {
  console.log('📩 بيانات جديدة من n8n:', req.body);
  
  const response = {
    status: 'نجاح',
    message: 'تم استقبال بياناتك من n8n بنجاح!',
    data: req.body,
    timestamp: new Date().toISOString()
  };
  
  res.json(response);
});

app.post('/api/greet', (req, res) => {
  const { name } = req.body;
  
  const response = {
    message: `أهلاً وسهلاً ${name || 'يا صديق'}!`,
    language: 'عربي',
    timestamp: new Date().toISOString()
  };
  
  res.json(response);
});

app.listen(port, () => {
  console.log(`✅ الخدمة شغالة على البورت: ${port}`);
});
