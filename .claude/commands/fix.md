---
name: fix
description: Validate HTML/CSS/JS structure and fix common issues
---

# Static Site Quality Check

This command validates the HTML, CSS, and JavaScript files in this static site project and fixes any issues found.

## Step 1: Run Quality Checks

Since this is a vanilla HTML/CSS/JS project with no build tools, we'll check for:

1. **HTML Validation**: Check for proper structure, missing tags, invalid attributes
2. **JavaScript Syntax**: Verify no syntax errors in JS files
3. **File Organization**: Ensure files are in correct directories per CLAUDE.md
4. **Audio File Verification**: Check that audio files exist and are referenced correctly
5. **Local Server Test**: Start local server and verify functionality

### Commands to run:

```bash
# Check if local server can start
cd public && timeout 2 python3 -m http.server 3009 2>&1 &
SERVER_PID=$!
sleep 1
kill $SERVER_PID 2>/dev/null || true
cd ..

# Check for JavaScript syntax errors
node -c public/sw.js 2>&1 || echo "JS syntax check complete"

# Check file structure
ls -la public/
ls -la public/audio/

# Verify all audio files referenced in index.html exist
grep -o 'src="audio/[^"]*"' public/index.html | sed 's/src="//;s/"$//' | while read file; do
  if [ ! -f "public/$file" ]; then
    echo "Missing audio file: $file"
  fi
done
```

## Step 2: Common Issues to Check

Parse the HTML/CSS/JS files and look for:

**HTML (`public/index.html`):**
- Missing alt attributes on images
- Broken audio src references
- Invalid HTML5 structure
- Missing meta tags for mobile responsiveness

**CSS (`public/style.css`):**
- Invalid CSS syntax
- Unused CSS rules
- Missing CSS variables that are referenced

**JavaScript (`public/sw.js` and inline scripts):**
- Syntax errors
- Console.log statements left in production code
- Missing error handling
- Undefined variables or functions

**File Organization:**
- Files in wrong directories (should follow /public structure)
- Audio files not in `/public/audio`
- Incorrect file naming conventions

## Step 3: Fix Issues (If Found)

If issues are detected in Step 2:

1. **For HTML issues**: Fix structure, add missing attributes, correct references
2. **For CSS issues**: Remove invalid syntax, clean up unused rules
3. **For JS issues**: Fix syntax errors, add error handling, remove debug code
4. **For file organization**: Move files to correct locations

Make fixes directly using the Edit tool for existing files.

## Step 4: Verify Fixes

After making fixes, run a final validation:

```bash
# Start local server to verify everything works
cd public && python3 -m http.server 3009
```

Then verify in browser:
- All 5 audio tracks load and play
- Playlist navigation works
- Responsive design on mobile
- No console errors

Report completion with summary of fixes made.
