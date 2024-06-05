require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/insta', async (req, res) => {
  const userId = process.env.INSTA_USER_ID;
  const accessToken = process.env.INSTA_ACCESS_TOKEN;
  try {
    const response = await fetch(
      `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: `Failed to fetch data` });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
