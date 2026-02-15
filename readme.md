markdown
# 🏰 Loire Valley Events PWA

A Progressive Web App for discovering interesting events in the Loire Valley during March 1-3, 2026.

## ✨ Features

- 📱 **Installable on iPhone** - Works like a native app
- 🔍 **Smart Event Discovery** - Finds châteaux tours, wine tastings, festivals, and more
- 🎨 **Beautiful UI** - Modern, responsive design
- ⚡ **Fast & Offline** - PWA capabilities with service worker
- 🆓 **Free to use** - No app store required!

## 🚀 Quick Start

### Local Development

 ⁠bash
cd loire-events
npm install
npm start


⁠ The app will run on http://localhost:3000

### Deploy to Production

**Option 1: Deploy to Vercel (Easiest)**

 ⁠bash
npm install -g vercel
vercel


⁠ Follow the prompts, then you'll get a URL like: `https://loire-events.vercel.app`

**Option 2: Deploy to Heroku**

 ⁠bash
# Install Heroku CLI, then:
heroku create loire-valley-events
git push heroku main


⁠ **Option 3: Deploy to your own server**

Upload the files to any Node.js hosting and run:
 ⁠bash
npm install
PORT=80 node server.js


⁠ ## 📱 Install on iPhone

Once deployed:

1. **Open Safari** on your iPhone
2. **Visit your app URL** (e.g., https://loire-events.vercel.app)
3. **Tap the Share button** (square with arrow)
4. **Scroll down and tap "Add to Home Screen"**
5. **Tap "Add"**

The app will appear on your home screen like a native app! 🎉

## 🔧 Customization

### Update Events

Edit `search-backend.js` to customize the events or add real-time web search:

 ⁠javascript
// You can integrate with real search APIs
// Or manually curate events for specific dates


### Change Styling

Edit `index.html` - all CSS is inline for easy tweaking:
- Colors: Change the gradient in `.header` and buttons
- Fonts: Update the `font-family` in `body`
- Layout: Modify padding/margins in various classes

### Add More Features

Ideas to extend:
- Filter events by category (wine, châteaux, festivals)
- Date selector for different date ranges
- Map view of event locations
- Share events with friends
- Save favorite events

## 📁 Project Structure


loire-events/
├── index.html          # Main app interface
├── manifest.json       # PWA manifest
├── sw.js              # Service worker for offline
├── server.js          # Express backend
├── search-backend.js  # Event search logic
├── package.json       # Dependencies
└── icon.png          # App icon


## 🌐 How It Works

1. **Frontend** (index.html): Beautiful mobile-first UI
2. **Backend** (server.js): Serves the app and API
3. **Search Logic** (search-backend.js): Finds Loire Valley events
4. **PWA Magic** (sw.js + manifest.json): Makes it installable

## 🎯 Events Included

Currently searches for:
- 🏰 Château tours (Chambord, Chenonceau, Villandry)
- 🍷 Wine tastings and vineyard visits
- 🎭 Cultural festivals and concerts
- 🚴 Loire à Vélo cycling routes
- 🌷 Garden visits
- 🎨 Art exhibitions
- 🍴 Local markets

## 💡 Tips

- **Best viewing**: iPhone in portrait mode
- **Performance**: Caches results for faster loading
- **Updates**: Pull to refresh or tap "Find Events" again
- **Sharing**: Screenshot results and share with travel companions

## 📝 License

MIT - feel free to modify and use!

---

Built with ❤️ by Tuvalito 🤖
