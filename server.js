⁠ javascript
const express = require('express');
const { searchLoireEvents } = require('./search-backend');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// API endpoint to search for events
app.get('/api/search-events', async (req, res) => {
  try {
    const events = await searchLoireEvents();
    res.json({ events });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

app.listen(PORT, () => {
  console.log(`Loire Events app running on http://localhost:${PORT}`);
});
