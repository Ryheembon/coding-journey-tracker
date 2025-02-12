# Build Your First Coding Journey Tracker
A beginner-friendly guide to creating your own progress tracker

## What We're Building
A simple webpage that helps you:
- Track completed and in-progress courses
- Take learning notes
- Monitor daily coding habits

## Step 1: Basic Setup (5 minutes)
1. Create a new folder called `my-tracker`
2. Inside it, create a file called `index.html`
3. Open `index.html` in your favorite text editor

## Step 2: Create Your First HTML Page (10 minutes)
Copy this basic code into `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Learning Tracker</title>
</head>
<body>
    <h1>My Coding Journey</h1>
</body>
</html>
```

## Step 3: Add Your First Progress Item (10 minutes)
Add this inside the `<body>` tag:

```html
<div class="progress-item">
    <span>✅</span>
    <span>My First HTML Page</span>
</div>
```

## Step 4: Add Basic Styling (15 minutes)
1. Create a file called `style.css`
2. Add this line in your HTML `<head>`:

```html
<link rel="stylesheet" href="style.css">
```

3. Add these basic styles to `style.css`:

```css
body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

.progress-item {
    background: #f0f0f0;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}
```

## Step 5: Add a Notes Section (15 minutes)
Add this before the closing `</body>` tag:

```html
<div class="notes-section">
    <h2>My Notes</h2>
    <input type="text" placeholder="Enter your note">
    <button onclick="addNote()">Save</button>
</div>
```

## Step 6: Make it Interactive (20 minutes)
1. Create a file called `script.js`
2. Add this line before `</body>`:

```html
<script src="script.js"></script>
```

3. Add this basic JavaScript:

```javascript
function addNote() {
    const noteInput = document.querySelector('input');
    if (noteInput.value) {
        alert('Note saved: ' + noteInput.value);
        noteInput.value = '';
    }
}
```

## Practice Exercises
Try these on your own:
1. Add another progress item
2. Change the background color
3. Add a "Delete Note" button

## Common Questions
- Q: Why isn't my style working?
  - A: Make sure your CSS file path is correct
- Q: My button doesn't work?
  - A: Check if your JavaScript file is properly linked

## Next Steps
Once you're comfortable with this basic version, try:
1. Adding more styling
2. Saving notes permanently
3. Adding a date to your notes
4. Creating a progress bar

## Need Help?
- Check the complete code in the repository
- Join our Discord community
- Ask questions in the Issues section

Remember: It's okay to make mistakes - that's how we learn! 🌟

---
Happy coding! 🚀