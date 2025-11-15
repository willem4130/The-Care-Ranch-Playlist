---
name: commit
description: Run checks, commit with AI message, and push
---

1. Review changes:
   ```bash
   git status
   git diff
   ```

2. Generate commit message:
   - Start with verb (Add/Update/Fix/Remove/Refactor)
   - Be specific and concise
   - One line preferred

3. Commit and push:
   ```bash
   git add -A
   git commit -m "your generated message"
   git push
   ```
