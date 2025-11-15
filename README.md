# The Care Ranch - Audio Player

A simple, beautiful audio player for sharing guided audio sessions with clients.

## Features

- Clean, responsive single-page design
- 5 guided audio sessions optimized for web streaming
- Beautiful playlist interface
- Keyboard shortcuts (Space: play/pause, Arrow keys: next/previous)
- Auto-play next track
- Mobile-friendly
- The Care Ranch branding

## Audio Files

The following sessions are included:

1. **Arriving in the Desert** - Begin your journey
2. **Daily Checkout Information** - End of day reflection
3. **Learning Edge, Staying Present** - Mindfulness practice
4. **Meeting and Mapping Your Inner Path** - Self-discovery session
5. **Preparing for the Day** - Morning practice

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Deploy from this directory:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? (Choose your account)
   - Link to existing project? **N**
   - Project name? `the-care-ranch-audio` (or your choice)
   - In which directory is your code located? `./`

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import this Git repository
4. Vercel will auto-detect the configuration
5. Click "Deploy"

Your site will be live at: `https://your-project-name.vercel.app`

## Local Development

To test locally:

```bash
# Install a simple HTTP server
npm install -g http-server

# Serve from the public directory
cd public
http-server -p 3000

# Or using Python
python3 -m http.server 3000
```

Visit: `http://localhost:3000`

## Customization

### Adding Spotify Playlists

1. Open `public/index.html`
2. Find the commented Spotify section (around line 53)
3. Uncomment the section and replace `YOUR_PLAYLIST_ID` with your Spotify playlist ID
4. Example: `https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M`

### Changing Colors

Edit the CSS variables in `public/style.css` (lines 3-10):

```css
:root {
  --primary-color: #2d5a3d;      /* Main brand color */
  --secondary-color: #6b9f7f;    /* Secondary brand color */
  --accent-color: #d4a373;       /* Accent color */
  --bg-color: #f8f5f0;           /* Background */
  --text-color: #2c2c2c;         /* Text color */
  --card-bg: #ffffff;            /* Card background */
}
```

### Adding More Audio Files

1. Place new MP3 files in `public/audio/`
2. Edit the `tracks` array in `public/index.html` (around line 66):

```javascript
const tracks = [
  {
    title: "Your Title",
    subtitle: "Your Subtitle",
    file: "audio/your-file.mp3"
  },
  // ... more tracks
];
```

## File Structure

```
audio/
├── public/
│   ├── audio/
│   │   ├── Audio - TCR Arriving in the Dessert.mp3
│   │   ├── Audio - TCR Daily checkout information.mp3
│   │   ├── Audio - TCR Learning Edge, Staying Present.mp3
│   │   ├── Audio - TCR Meeting and Mapping your Inner Pa.mp3
│   │   └── Audio - TCR Preparing for the Day.mp3
│   ├── index.html
│   └── style.css
├── package.json
├── vercel.json
└── README.md
```

## Technical Details

- **Size Optimization**: Original WAV files (277MB) converted to MP3 (25MB) - 90% reduction
- **Format**: MP3 @ 128kbps, 44.1kHz stereo
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)
- **Hosting**: Optimized for Vercel with caching headers

## Sharing with Clients

After deployment, you can share:
- **Main link**: Your Vercel URL (e.g., `https://care-ranch-audio.vercel.app`)
- All 5 audio files are accessible from this single link
- No login required - simple and fast

## Future Enhancements

Want to add individual client access later? Consider:
- Adding authentication (password-protected pages)
- Creating unique links per client
- Adding a backend database for access control

## Support

For questions or issues, contact The Care Ranch team.

---

**© 2025 The Care Ranch. All rights reserved.**
