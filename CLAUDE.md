# The Care Ranch - Playlist

A simple, clean audio player for sharing guided audio sessions with clients. Built with vanilla HTML/CSS/JS and optimized for Vercel deployment.

## Project Structure

```
audio/
├── public/              # All web-facing static files
│   ├── audio/          # 5 MP3 guided sessions (25MB total)
│   ├── index.html      # Single-page audio player app
│   └── style.css       # Clean, minimal styling
├── .claude/
│   └── commands/
│       └── commit.md   # Git commit automation
├── package.json        # NPM config with Vercel dependencies
├── vercel.json         # Deployment config with cache headers
└── README.md           # Complete setup documentation
```

## Organization Rules

**Keep code organized and modular:**
- Static assets → `/public` folder
- Audio files → `/public/audio` (MP3 format, 128kbps)
- Single-page app → All HTML/CSS/JS in `/public`
- Documentation → Root level (README.md)

**File naming:**
- Clear, descriptive names
- Audio files: "Audio - TCR [Session Name].mp3"
- No spaces in code filenames

**Modularity principles:**
- Vanilla JS - no framework overhead
- Inline scripts for simplicity (single-page app)
- CSS variables for theming consistency
- Self-contained, dependency-free frontend

## Code Quality - Zero Tolerance

This is a static HTML project with no build tools. Before committing:

1. **Test locally:**
   ```bash
   cd public && python3 -m http.server 3009
   ```
   Visit http://localhost:3009 and verify:
   - All 5 audio tracks load and play
   - Playlist navigation works
   - Responsive design on mobile
   - No console errors

2. **Validate HTML:** Ensure proper HTML5 structure

3. **Check audio files:**
   - Format: MP3 @ 128kbps, 44.1kHz stereo
   - Total size under 30MB for fast loading

## Deployment

**Vercel (Production):**
```bash
vercel --prod
```

**Cache Strategy:**
- Audio files: 1 year immutable cache
- HTML/CSS: Standard Vercel caching

## Key Features

- 5 guided audio sessions for The Care Ranch
- Clean, professional design matching Care Ranch branding
- Keyboard shortcuts (Space: play/pause, Arrows: navigate)
- Auto-play next track
- Mobile-responsive
- No authentication required
- Shareable via single URL
