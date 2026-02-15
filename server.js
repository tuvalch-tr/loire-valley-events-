const express = require('express');
const { searchLoireEvents } = require('./search-backend');

const app = express();
const PORT = process.env.PORT || 3000;

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

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

// Listen on 0.0.0.0 to accept external connections
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Loire Events app running on port ${PORT}`);
  console.log(`Health check available at /health`);
});
